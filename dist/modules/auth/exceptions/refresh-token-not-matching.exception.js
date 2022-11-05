"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenNotMatchingException = void 0;
const common_1 = require("@nestjs/common");
class RefreshTokenNotMatchingException extends common_1.BadRequestException {
    constructor(error) {
        super('Refresh token not matching', error);
    }
}
exports.RefreshTokenNotMatchingException = RefreshTokenNotMatchingException;
//# sourceMappingURL=refresh-token-not-matching.exception.js.map