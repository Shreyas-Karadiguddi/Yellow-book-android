import { PORT, DEVHOST } from '@env'

const IS_DEV = __DEV__
export const API_URL = IS_DEV ? `http://${DEVHOST}:${PORT}/api` : 'Production'