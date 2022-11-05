"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
class RolesGuard {
    constructor(_reflector) {
        this._reflector = _reflector;
    }
    canActivate(context) {
        const requiredRoles = this._reflector.getAllAndOverride('roles', [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => { var _a, _b; return (_b = (_a = user === null || user === void 0 ? void 0 : user.usrAuth) === null || _a === void 0 ? void 0 : _a.role) === null || _b === void 0 ? void 0 : _b.includes(role); });
    }
}
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map