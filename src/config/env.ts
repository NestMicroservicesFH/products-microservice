import 'dotenv/config';
import * as z from 'zod';

const envsSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
});

const evars = envsSchema.parse(process.env);

export const EnvVars = {
  port: evars.PORT,
  database_url: evars.DATABASE_URL,
};
