import { ApiProperty } from "@nestjs/swagger";

export class RegistryCreateDto {
  @ApiProperty({ description: "User pin code" })
  readonly username: string;

  @ApiProperty({ description: "User pin code" })
  readonly image_route_file?: string;

  @ApiProperty({ description: "rol user´s" })
  readonly sample_qty: number;
}
