import { BadRequestException } from '@nestjs/common';
export declare class UserCreationException extends BadRequestException {
    constructor(error?: string);
}
