import 'dotenv/config';

import fs from 'fs';

Object.assign(process.env, {
  GOOGLE_APPLICATION_CREDENTIALS: `${process.cwd()}/serviceaccount.json`,
});

if (!fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
  fs.writeFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, process.env.GOOGLE_SERVICE_ACCOUNT);
}
