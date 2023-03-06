import { IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindByIdParamDto {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
