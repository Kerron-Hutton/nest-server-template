import { ApiProperty } from '@nestjs/swagger';

export class BadRequestExceptionModel {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  error: string;

  @ApiProperty()
  message: string[];
}
