"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
function getAge(birthdate) {
    return Math.floor((new Date().getTime() - new Date(birthdate).getTime()) / 3.15576e10);
}
exports.getAge = getAge;
//# sourceMappingURL=date.util.js.map