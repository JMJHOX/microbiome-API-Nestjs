"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinCodeGenerationErrorException = void 0;
const common_1 = require("@nestjs/common");
class PinCodeGenerationErrorException extends common_1.BadRequestException {
    constructor(error) {
        super('Error while PinCode generation', error);
    }
}
exports.PinCodeGenerationErrorException = PinCodeGenerationErrorException;
//# sourceMappingURL=pin-code-generation-incorrect.exception.js.map