import crypto from "crypto";

// Create symmetric key
const ALGORITHM = "aes-256-cbc";

let iv = Buffer.from("7a733f8badbb49d89056cd586e2107e0", 'hex');

export function encrypt(message: string, security_key: any): string {
    let c = crypto.createCipheriv(ALGORITHM, security_key, iv);
    let encrypted = c.update(message, 'utf8', 'hex');
    encrypted += c.final('hex');
    return encrypted;
}

export function decrypt(encrypted_data: any, security_key: any): string {
    let d = crypto.createDecipheriv(ALGORITHM, security_key, iv);
    d.setAutoPadding(false);
    let decrypted = d.update(encrypted_data, 'hex', 'utf8');
    decrypted += d.final('utf8');
    return decrypted;
}


export function privateKeyFromSismoId(groupId: string) {
    return crypto.createHash('sha256', groupId).digest('hex');
}
