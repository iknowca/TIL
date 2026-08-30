import java.security.*;

public class KeyGenerator {
    private static KeyGenerator instance;

    private PublicKey publicKey;
    private PrivateKey privateKey;

    private KeyGenerator() throws NoSuchAlgorithmException {
        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");

        generator.initialize(3072);

        KeyPair keyPair = generator.generateKeyPair();

        publicKey = keyPair.getPublic();
        privateKey = keyPair.getPrivate();
    }

    public static KeyGenerator getInstance() throws NoSuchAlgorithmException {
        if (instance == null) {
            instance = new KeyGenerator();
            return instance;
        } else {
            return instance;
        }
    }

    public PublicKey getPublicKey() {
        return publicKey;
    }

    public PrivateKey getPrivateKey() {
        return privateKey;
    }
}
