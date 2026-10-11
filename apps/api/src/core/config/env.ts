import * as z from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  APP_PORT: z.coerce.number().int().min(1).max(65535).default(3000),

  DATABASE_URL: z.url(),

  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates raw environment variables at application startup.
 * Intended for use with `ConfigModule.forRoot({ validate })`.
 */
export function validate(config: Record<string, unknown>): Env {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    throw new Error(
      `Invalid environment configuration:\n${z.prettifyError(result.error)}`,
    );
  }

  return result.data;
}
