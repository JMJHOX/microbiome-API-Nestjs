"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongCredentialsProvidedException = void 0;
const common_1 = require("@nestjs/common");
class WrongCredentialsProvidedException extends common_1.BadRequestException {
    constructor(error) {
        super('Wrong credentials provided', error);
    }
}
exports.WrongCredentialsProvidedException = WrongCredentialsProvidedException;
//# sourceMappingURL=wrong-credentials-provided.exception.js.map