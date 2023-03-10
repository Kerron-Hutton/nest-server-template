import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import * as apiDoc from './swagger/user-controller.swagger';
import { FindByIdParamDto } from '../../common/dto/find-by-id-param.dto';
import { PaginationRequestQueryDto } from '../../common/dto/pagination-request-query.dto';
import { UserModel } from './model/user.model';

import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import {
  ApiOkPaginationResponse,
  ValidationBadRequest,
} from '../../common/common-api-doc.swagger';

@ApiTags('user')
@Controller('user')
@ApiBadRequestResponse(ValidationBadRequest)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkPaginationResponse(UserModel)
  @ApiOperation({ summary: 'findAllUsingPagination' })
  findAllUsingPagination(@Query() query: PaginationRequestQueryDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'findById' })
  @ApiOkResponse(apiDoc.findByIdApiSuccessResponse)
  findById(@Param() param: FindByIdParamDto) {
    return this.userService.findById(param);
  }
}
