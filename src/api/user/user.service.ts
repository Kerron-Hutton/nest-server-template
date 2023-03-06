import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { FindByIdParamDto } from '../../common/dto/find-by-id-param.dto';
import { USER_REPOSITORY } from '../../common/constants';
import { UserEntity } from '../../typeorm/entitiy';
import { PaginationRequestQueryDto } from '../../common/dto/pagination-request-query.dto';
import { PaginatedResultModel } from '../../common/model/paginated-result.model';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(query: PaginationRequestQueryDto) {
    let skip = 0;

    if (query.page === 1) {
      skip = query.page * query.take - query.take + 1;
    }

    const queryResult = await this.userRepository.findAndCount({
      take: query.take,
      skip,
    });

    const totalItems = queryResult[1];
    const items = queryResult[0];

    const paginatedResult: PaginatedResultModel<UserModel> = {
      items,
      totalItems,
      itemCount: items.length,
      currentPage: Number(query.page),
      itemsPerPage: Number(query.take),
      totalPages: Math.ceil(totalItems / query.take),
    };

    return paginatedResult;
  }

  async findById(param: FindByIdParamDto) {
    return this.userRepository.findOneBy({ id: param.id });
  }
}
