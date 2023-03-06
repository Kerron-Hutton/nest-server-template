import { ApiProperty } from '@nestjs/swagger';

export class PaginationRequestQueryDto {
  @ApiProperty()
  page: number;

  @ApiProperty()
  take: number;
}
