import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { Env } from "./core/config/env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes

  app.setGlobalPrefix("api");

  // Server listen
  const config = app.get<ConfigService<Env, true>>(ConfigService);
  const port = config.get("APP_PORT", { infer: true });

  await app.listen(port);
}
void bootstrap();
