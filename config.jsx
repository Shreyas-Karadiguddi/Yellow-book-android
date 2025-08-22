import { PORT, DEVHOST } from '@env';

export const API_URL = __DEV__
  ? `http://${DEVHOST}:${PORT}/api`
  : global.API_URL;
