async function main() {
    const response = await fetch('http://localhost:8080/public-key')
    const publicKeyBase64 = await response.text()

    console.log('key:', publicKeyBase64)

    const publicKey = await importPublicKey(publicKeyBase64)

    console.log(publicKey)

    const text = 'abcdefg'
    console.log('text:', text)

    const encoded = await encrypt(publicKey, text)

    console.log('encoded:', encoded)

    const decode = await fetch("http://localhost:8080/decode", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            encoded,
        }),
    })
    const decodeText = await decode.text()
    console.log('decode:', decodeText)
}

function base64ToBytes(base64) {
    const binary = atob(base64)

    return Uint8Array.from(
        binary,
        char => char.charCodeAt(0)
    )
}

async function importPublicKey(base64) {
    const keyBytes = base64ToBytes(base64)

    return crypto.subtle.importKey(
        'spki',
        keyBytes,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-256',
        },
        false,
        ['encrypt']
    )
}

async function encrypt(publicKey, text) {
    const data = new TextEncoder().encode(text)

    const encrypted = await crypto.subtle.encrypt(
        {
            name: 'RSA-OAEP',
        },
        publicKey,
        data
    )

    return bytesToBase64(new Uint8Array(encrypted))
}

function bytesToBase64(bytes) {
    return btoa(
        String.fromCharCode(...bytes)
    )
}

main()
