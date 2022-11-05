import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAuthEntity, UserEntity } from "../user/entities";
import { UserAuthService, UserService } from "../user/services";
import { MicroBiomeController } from "./controller/courses.controller";
import { MicroSampleEntity } from "./entities/registry.entity";
import { microService } from "./services/micro.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([MicroSampleEntity, UserEntity, UserAuthEntity]),
  ],
  controllers: [MicroBiomeController],
  providers: [microService, UserService, UserAuthService],
  exports: [],
})
export class MicroBiomeModule {}
