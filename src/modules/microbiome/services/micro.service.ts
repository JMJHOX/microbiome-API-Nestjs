import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegistryCreateDto } from "../dto/models/micro-create.dto";
import { MicroSampleEntity } from "../entities/registry.entity";

@Injectable()
export class microService {
  constructor(
    @InjectRepository(MicroSampleEntity)
    private readonly _microSampleRepository: Repository<MicroSampleEntity>
  ) {}

  public async createRegistry(
    microRegistrationDto: RegistryCreateDto
  ): Promise<any> {
    const createdUser = { ...microRegistrationDto };
    console.log("payloadState:",microRegistrationDto)
    return this._microSampleRepository.save(createdUser);
  }


 }

