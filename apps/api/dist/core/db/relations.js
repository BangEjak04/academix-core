"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "relations", {
    enumerable: true,
    get: function() {
        return relations;
    }
});
const _drizzleorm = require("drizzle-orm");
const _schema = /*#__PURE__*/ _interop_require_wildcard(require("./schema"));
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
const relations = (0, _drizzleorm.defineRelations)(_schema, (r)=>({
        users: {
            sessions: r.many.sessions({
                from: r.users.id,
                to: r.sessions.userId
            }),
            accounts: r.many.accounts({
                from: r.users.id,
                to: r.accounts.userId
            })
        },
        sessions: {
            user: r.one.users({
                from: r.sessions.userId,
                to: r.users.id
            })
        },
        accounts: {
            user: r.one.users({
                from: r.accounts.userId,
                to: r.users.id
            })
        }
    }));

//# sourceMappingURL=relations.js.map