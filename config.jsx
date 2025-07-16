import { PORT, DEVHOST } from '@env'

const IS_DEV = true
export const API_URL = IS_DEV ? `http://${DEVHOST}:${PORT}/api` : 'Production'