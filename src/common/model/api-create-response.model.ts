import { ApiProperty } from '@nestjs/swagger';

export class ApiCreateResponseModel {
  @ApiProperty()
  id: number;
}
