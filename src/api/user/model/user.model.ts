import { UserEntity } from '../../../typeorm/entitiy';
import { ApiProperty } from '@nestjs/swagger';

export class UserModel implements UserEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ format: 'date' })
  dateOfBirth: Date;
}
