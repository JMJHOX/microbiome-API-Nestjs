import { BadRequestException } from '@nestjs/common';
export declare class RefreshTokenNotMatchingException extends BadRequestException {
    constructor(error?: string);
}
