import { z } from 'zod';

export const environmentSchema = z.enum(['test', 'development', 'production']);

const databaseSchema = z.object({
  host: z.string(),
  database: z.string(),
  password: z.string(),
  port: z.coerce.number(),
  username: z.string()
});

const passwordHashSalt = z.object({
  passwordHashSalt: z.coerce.number()
});

const jwtSchema = z.object({
  secret: z.string(),
  expiresIn: z.string()
});

export const configSchema = z.object({
  env: environmentSchema,
  port: z.coerce.number().positive().int(),
  database: databaseSchema,
  salt: passwordHashSalt,
  jwt: jwtSchema
});
