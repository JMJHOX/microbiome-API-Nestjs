import { BadRequestException } from '@nestjs/common';
export declare class PinCodeGenerationErrorException extends BadRequestException {
    constructor(error?: string);
}
