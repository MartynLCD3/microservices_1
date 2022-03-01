import path from 'path';
import { config } from 'dotenv';

export default config({ path: path.resolve(__dirname, '../../../.env') });
