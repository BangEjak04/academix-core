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
    get accounts () {
        return accounts;
    },
    get jwkss () {
        return jwkss;
    },
    get sessions () {
        return sessions;
    },
    get users () {
        return users;
    },
    get verifications () {
        return verifications;
    }
});
const _drizzleorm = require("drizzle-orm");
const _pgcore = require("drizzle-orm/pg-core");
const users = (0, _pgcore.pgTable)("users", {
    id: (0, _pgcore.uuid)("id").default((0, _drizzleorm.sql)`pg_catalog.gen_random_uuid()`).primaryKey(),
    name: (0, _pgcore.text)("name").notNull(),
    email: (0, _pgcore.text)("email").notNull().unique(),
    emailVerified: (0, _pgcore.boolean)("email_verified").default(false).notNull(),
    image: (0, _pgcore.text)("image"),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull(),
    username: (0, _pgcore.text)("username").unique(),
    displayUsername: (0, _pgcore.text)("display_username"),
    role: (0, _pgcore.text)("role"),
    banned: (0, _pgcore.boolean)("banned").default(false),
    banReason: (0, _pgcore.text)("ban_reason"),
    banExpires: (0, _pgcore.timestamp)("ban_expires")
});
const sessions = (0, _pgcore.pgTable)("sessions", {
    id: (0, _pgcore.uuid)("id").default((0, _drizzleorm.sql)`pg_catalog.gen_random_uuid()`).primaryKey(),
    expiresAt: (0, _pgcore.timestamp)("expires_at").notNull(),
    token: (0, _pgcore.text)("token").notNull().unique(),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull(),
    ipAddress: (0, _pgcore.text)("ip_address"),
    userAgent: (0, _pgcore.text)("user_agent"),
    userId: (0, _pgcore.uuid)("user_id").notNull().references(()=>users.id, {
        onDelete: "cascade"
    }),
    impersonatedBy: (0, _pgcore.text)("impersonated_by")
}, (table)=>[
        (0, _pgcore.index)("sessions_userId_idx").on(table.userId)
    ]);
const accounts = (0, _pgcore.pgTable)("accounts", {
    id: (0, _pgcore.uuid)("id").default((0, _drizzleorm.sql)`pg_catalog.gen_random_uuid()`).primaryKey(),
    accountId: (0, _pgcore.text)("account_id").notNull(),
    providerId: (0, _pgcore.text)("provider_id").notNull(),
    userId: (0, _pgcore.uuid)("user_id").notNull().references(()=>users.id, {
        onDelete: "cascade"
    }),
    accessToken: (0, _pgcore.text)("access_token"),
    refreshToken: (0, _pgcore.text)("refresh_token"),
    idToken: (0, _pgcore.text)("id_token"),
    accessTokenExpiresAt: (0, _pgcore.timestamp)("access_token_expires_at"),
    refreshTokenExpiresAt: (0, _pgcore.timestamp)("refresh_token_expires_at"),
    scope: (0, _pgcore.text)("scope"),
    password: (0, _pgcore.text)("password"),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0, _pgcore.index)("accounts_userId_idx").on(table.userId)
    ]);
const verifications = (0, _pgcore.pgTable)("verifications", {
    id: (0, _pgcore.uuid)("id").default((0, _drizzleorm.sql)`pg_catalog.gen_random_uuid()`).primaryKey(),
    identifier: (0, _pgcore.text)("identifier").notNull(),
    value: (0, _pgcore.text)("value").notNull(),
    expiresAt: (0, _pgcore.timestamp)("expires_at").notNull(),
    createdAt: (0, _pgcore.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, _pgcore.timestamp)("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0, _pgcore.index)("verifications_identifier_idx").on(table.identifier)
    ]);
const jwkss = (0, _pgcore.pgTable)("jwkss", {
    id: (0, _pgcore.uuid)("id").default((0, _drizzleorm.sql)`pg_catalog.gen_random_uuid()`).primaryKey(),
    publicKey: (0, _pgcore.text)("public_key").notNull(),
    privateKey: (0, _pgcore.text)("private_key").notNull(),
    createdAt: (0, _pgcore.timestamp)("created_at").notNull(),
    expiresAt: (0, _pgcore.timestamp)("expires_at"),
    alg: (0, _pgcore.text)("alg"),
    crv: (0, _pgcore.text)("crv")
});

//# sourceMappingURL=schema.js.map