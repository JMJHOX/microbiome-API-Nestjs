"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.capitalizeFirst = void 0;
function capitalizeFirst(value) {
    return `${value.toString().toLowerCase().charAt(0).toUpperCase()}${value
        .toString()
        .toLowerCase()
        .slice(1)}`;
}
exports.capitalizeFirst = capitalizeFirst;
String.prototype.removeSlashAtBeginning = function () {
    return capitalizeFirst(this);
};
function generateRandomString(length) {
    return Math.random()
        .toString(36)
        .replace(/[^a-zA-Z0-9]+/g, '')
        .toUpperCase()
        .substr(0, length);
}
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=string.util.js.map