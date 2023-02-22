import { Response } from "express";
import { RegistryCreateDto } from "../dto/models/micro-create.dto";
export declare class MicroBiomeController {
    private readonly microService;
    register(courserRegistrationDto: RegistryCreateDto, res: Response): Promise<any>;
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}
