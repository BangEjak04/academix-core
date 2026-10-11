"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _drizzle = require("@nestjs/drizzle");
const _nodepostgres = require("drizzle-orm/node-postgres");
const _env = require("./core/config/env");
const _relations = require("./core/db/relations");
const _usermodule = require("./modules/user/user.module");
const _authmodule = require("./modules/auth/auth.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for(var i = decorators.length - 1; i >= 0; i--){
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
class AppModule {
}
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot({
                isGlobal: true,
                validate: _env.validate
            }),
            _drizzle.DrizzleModule.forRootAsync({
                inject: [
                    _config.ConfigService
                ],
                useFactory: (config)=>({
                        drizzle: _nodepostgres.drizzle,
                        connection: config.get("DATABASE_URL", {
                            infer: true
                        }),
                        relations: _relations.relations
                    })
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
            _usermodule.UserModule,
            _authmodule.AuthModule
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map