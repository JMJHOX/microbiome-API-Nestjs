import { BadRequestException } from '@nestjs/common';
export declare class WrongCredentialsProvidedException extends BadRequestException {
    constructor(error?: string);
}
