"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreationException = void 0;
const common_1 = require("@nestjs/common");
class UserCreationException extends common_1.BadRequestException {
    constructor(error) {
        super('Error while user auth creation', error);
    }
}
exports.UserCreationException = UserCreationException;
//# sourceMappingURL=user-creation.exception.js.map