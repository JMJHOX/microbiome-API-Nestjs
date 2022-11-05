"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = exports.generateRandomInteger = void 0;
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
exports.generateRandomInteger = generateRandomInteger;
function isNumeric(value) {
    const pattern = /^[-+]?\d+$/;
    return pattern.test(value);
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=number.util.js.map