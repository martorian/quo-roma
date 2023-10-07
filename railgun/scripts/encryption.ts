// hash-service.ts
import { pbkdf2 } from '@railgun-community/wallet';
import { Pbkdf2Response } from '@railgun-community/shared-models';

export const hashPasswordString = async ({ secret, salt, iterations }): Promise<Pbkdf2Response> => {
  return pbkdf2(secret, salt, iterations);
};