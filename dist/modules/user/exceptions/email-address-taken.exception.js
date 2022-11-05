"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddressTakenException = void 0;
const common_1 = require("@nestjs/common");
class EmailAddressTakenException extends common_1.BadRequestException {
    constructor(error) {
        super('E-mail address already taken', error);
    }
}
exports.EmailAddressTakenException = EmailAddressTakenException;
//# sourceMappingURL=email-address-taken.exception.js.map