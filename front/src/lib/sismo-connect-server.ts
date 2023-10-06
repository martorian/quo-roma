import { SismoConnect } from '@sismo-core/sismo-connect-server';
import { sismoConfig } from '@/config/sismo';

export const sismoConnectServer = SismoConnect({
    config: sismoConfig,
});
