"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _config = require("@nestjs/config");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    // Pipes
    app.setGlobalPrefix("api");
    // Server listen
    const config = app.get(_config.ConfigService);
    const port = config.get("APP_PORT", {
        infer: true
    });
    await app.listen(port);
}
void bootstrap();

//# sourceMappingURL=main.js.map