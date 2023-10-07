

// Create symmetric key
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 

let iv = Buffer.from("7a733f8badbb49d89056cd586e2107e0", 'hex');

export function encrypt(message: string, security_key: any): string {  
  let c = crypto.createCipheriv(algorithm, security_key, iv);
  let encrypted = c.update(message, 'utf8', 'hex');
  encrypted += c.final('hex');
  return encrypted;
}
  
export function decrypt(encrypted_data: any, security_key: any): string {      
  let d = crypto.createDecipheriv(algorithm, security_key, iv);
  d.setAutoPadding(false);
  let decrypted = d.update(encrypted_data, 'hex', 'utf8');
  decrypted += d.final('utf8');
  return decrypted;
}
  