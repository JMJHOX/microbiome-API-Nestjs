import { BadRequestException } from '@nestjs/common';
export declare class EmailAddressTakenException extends BadRequestException {
    constructor(error?: string);
}
