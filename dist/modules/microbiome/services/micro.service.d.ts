import { Repository } from "typeorm";
import { RegistryCreateDto } from "../dto/models/micro-create.dto";
import { MicroSampleEntity } from "../entities/registry.entity";
export declare class microService {
    private readonly _microSampleRepository;
    constructor(_microSampleRepository: Repository<MicroSampleEntity>);
    createRegistry(microRegistrationDto: RegistryCreateDto): Promise<any>;
}
