"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSlashAtEnd = exports.removeSlashAtBeginning = void 0;
function removeSlashAtBeginning(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
}
exports.removeSlashAtBeginning = removeSlashAtBeginning;
function removeSlashAtEnd(path) {
    return path.charAt(path.length - 1) === '/'
        ? path.substr(0, path.length - 1)
        : path;
}
exports.removeSlashAtEnd = removeSlashAtEnd;
String.prototype.removeSlashAtBeginning = function () {
    return removeSlashAtBeginning(this);
};
String.prototype.removeSlashAtEnd = function () {
    return removeSlashAtEnd(this);
};
//# sourceMappingURL=path.util.js.map