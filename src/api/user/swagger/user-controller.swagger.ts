import { ApiResponseOptions } from '@nestjs/swagger';
import { UserModel } from '../model/user.model';

export const findByIdApiSuccessResponse: ApiResponseOptions = {
  description: 'returns with the specified id from the database',
  type: UserModel,
};
