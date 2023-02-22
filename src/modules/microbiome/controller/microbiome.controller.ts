import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import {
  ResponseCode,
  responseKey,
  ResponseName,
} from "src/common/constants/response.constant";
import { SuccessResponse } from "src/common/dtos/http-response.dto";

import { RegistryCreateDto } from "../dto/models/micro-create.dto";
import { microService } from "../services/micro.service";
import { multerOptions } from "src/common/constants/multer.constant";

@Controller({ path: "micro", version: "1" })
@ApiTags("micro")
@UseInterceptors(ClassSerializerInterceptor)
export class MicroBiomeController {
  @Inject(microService)
  private readonly microService: microService;

  @Post("createRegistry")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: "Successfully Registered the information",
    status: HttpStatus.OK,
    type: SuccessResponse,
  })
  @ApiOperation({ summary: "Registers a register information" })
  //@UseGuards(JwtAccessTokenGuard)
  async register(
    @Body() courserRegistrationDto: RegistryCreateDto,
    @Res() res: Response
  ): Promise<any> {
    const resultAdded = await this.microService.createRegistry(
      courserRegistrationDto
    );
    res
      .status(HttpStatus.OK)
      .json({
        [responseKey.STATUS]: ResponseCode.SUCCESS_CODE,
        [responseKey.MESSAGE]: ResponseName.SUCCESS,
        [responseKey.DATA]: resultAdded,
      })
      .send();
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("image", multerOptions))
  async uploadedFile(@UploadedFile() file) {
    console.log(file);
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }
}
