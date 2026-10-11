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
    get userInsertSchema () {
        return userInsertSchema;
    },
    get userSelectSchema () {
        return userSelectSchema;
    },
    get userUpdateSchema () {
        return userUpdateSchema;
    }
});
const _zod = require("drizzle-orm/zod");
const _zod1 = /*#__PURE__*/ _interop_require_wildcard(require("zod"));
const _schema = require("../../../core/db/schema");
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
const userSelectSchema = (0, _zod.createSelectSchema)(_schema.users);
const userInsertSchema = (0, _zod.createInsertSchema)(_schema.users, {
    name: _zod1.string(),
    email: _zod1.string(),
    emailVerified: _zod1.string(),
    image: _zod1.string()
}).omit({
    id: true,
    createdAt: true
});
const userUpdateSchema = (0, _zod.createUpdateSchema)(_schema.users).omit({
    id: true,
    createdAt: true
});

//# sourceMappingURL=user.types.js.map