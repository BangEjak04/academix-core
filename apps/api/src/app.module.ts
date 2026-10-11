import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DrizzleModule } from "@nestjs/drizzle";
import { drizzle } from "drizzle-orm/node-postgres";
import { Env, validate } from "./core/config/env";
import { relations } from "./core/db/relations";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    DrizzleModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env, true>) => ({
        drizzle,
        connection: config.get("DATABASE_URL", { infer: true }),
        relations,
      }),
    }),
    // I18nModule.forRoot({
    //   defaultLocale: "en",
    //   supportedLocales: ["en", "id"],
    //   fallbacks: { "en-US": "en" },
    //   loader: new JsonI18nLoader({
    //     path: path.join(__dirname, "/common/internationalization/"),
    //   }),
    //   resolvers: [
    //     new QueryLocaleResolver("lang"),
    //     new HeaderLocaleResolver("x-lang"),
    //     new AcceptLanguageLocaleResolver(),
    //   ],
    // }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
