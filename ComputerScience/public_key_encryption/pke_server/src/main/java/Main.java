import com.sun.net.httpserver.HttpServer;

import javax.crypto.Cipher;
import javax.crypto.spec.OAEPParameterSpec;
import javax.crypto.spec.PSource;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.spec.MGF1ParameterSpec;
import java.util.Base64;

public class Main {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        server.createContext("/public-key", exchange -> {
            PublicKey publicKey = null;
            try {
                publicKey = KeyGenerator.getInstance().getPublicKey();
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }
            String response = Base64.getEncoder()
                    .encodeToString(publicKey.getEncoded());

            byte[] body = response.getBytes(StandardCharsets.UTF_8);

            exchange.sendResponseHeaders(200, body.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(body);
            }
        });

        server.createContext("/decode", exchange -> {
            if (!"POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(405, -1);
                return;
            }

            try {
                // Request Body 읽기
                String requestBody = new String(
                        exchange.getRequestBody().readAllBytes(),
                        StandardCharsets.UTF_8
                );

                // {"encoded":"..."} 에서 encoded 값 추출
                String encoded = requestBody
                        .replace("{\"encoded\":\"", "")
                        .replace("\"}", "");

                // Base64 → RSA 암호문 byte[]
                byte[] encryptedBytes = Base64.getDecoder()
                        .decode(encoded);

                // 개인키
                var privateKey = KeyGenerator.getInstance()
                        .getPrivateKey();

                // JS의 RSA-OAEP + SHA-256 설정과 동일하게 설정
                OAEPParameterSpec oaepParameterSpec =
                        new OAEPParameterSpec(
                                "SHA-256",
                                "MGF1",
                                MGF1ParameterSpec.SHA256,
                                PSource.PSpecified.DEFAULT
                        );

                Cipher cipher = Cipher.getInstance(
                        "RSA/ECB/OAEPPadding"
                );

                cipher.init(
                        Cipher.DECRYPT_MODE,
                        privateKey,
                        oaepParameterSpec
                );

                // 복호화
                byte[] decryptedBytes =
                        cipher.doFinal(encryptedBytes);

                String response = new String(
                        decryptedBytes,
                        StandardCharsets.UTF_8
                );

                byte[] body =
                        response.getBytes(StandardCharsets.UTF_8);

                exchange.getResponseHeaders()
                        .set("Content-Type", "text/plain; charset=UTF-8");

                exchange.sendResponseHeaders(200, body.length);

                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(body);
                }

            } catch (Exception e) {
                e.printStackTrace();

                byte[] body = "Decrypt failed"
                        .getBytes(StandardCharsets.UTF_8);

                exchange.sendResponseHeaders(500, body.length);

                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(body);
                }
            }
        });
        server.start();
        System.out.println("Server started");
    }
}
