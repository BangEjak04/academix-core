"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get envSchema () {
        return envSchema;
    },
    get validate () {
        return validate;
    }
});
const _zod = /*#__PURE__*/ _interop_require_wildcard(require("zod"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
const envSchema = _zod.object({
    NODE_ENV: _zod.enum([
        "development",
        "test",
        "production"
    ]).default("development"),
    APP_PORT: _zod.coerce.number().int().min(1).max(65535).default(3000),
    DATABASE_URL: _zod.url(),
    JWT_SECRET: _zod.string().min(32, "JWT_SECRET must be at least 32 characters")
});
function validate(config) {
    const result = envSchema.safeParse(config);
    if (!result.success) {
        throw new Error(`Invalid environment configuration:\n${_zod.prettifyError(result.error)}`);
    }
    return result.data;
}

//# sourceMappingURL=env.js.map