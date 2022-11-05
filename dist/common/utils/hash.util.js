"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeString = exports.validateHash = exports.generateHash = void 0;
const bcrypt = require("bcrypt");
const crypto = require("crypto");
async function generateHash(password) {
    return bcrypt.hash(password, 10);
}
exports.generateHash = generateHash;
async function validateHash(password, hash) {
    if (!password || !hash) {
        return Promise.resolve(false);
    }
    return bcrypt.compare(password, hash || '').then();
}
exports.validateHash = validateHash;
function encodeString(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}
exports.encodeString = encodeString;
//# sourceMappingURL=hash.util.js.map