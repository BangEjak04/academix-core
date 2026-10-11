"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _drizzle = require("@nestjs/drizzle");
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
function _ts_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(metadataKey, metadataValue);
    }
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
class UserService {
    db;
    constructor(db){
        this.db = db;
    }
    findAll(page, perPage) {
        return this.db.query.users.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    findByEmail(email) {
        return this.db.query.users.findFirst({
            where: {
                email
            }
        });
    }
    create() {
        return this.db;
    }
    update() {
        return this.db;
    }
    delete() {
        return this.db;
    }
}
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _drizzle.InjectDrizzle)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof Database === "undefined" ? Object : Database
    ])
], UserService);

//# sourceMappingURL=user.service.js.map