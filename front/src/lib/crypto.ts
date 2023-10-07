import crypto from "crypto";

export function privateKeyFromSismoId(groupId: string) {
    return crypto.createHash('sha256', groupId).digest('hex');
}
