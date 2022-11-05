"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
function Authorization(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(guards_1.JwtAccessTokenGuard, guards_1.RolesGuard, guards_1.EmailConfirmationGuard));
}
exports.Authorization = Authorization;
//# sourceMappingURL=auth.decorator.js.map