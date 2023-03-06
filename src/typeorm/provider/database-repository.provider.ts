import { FactoryProvider } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { POSTGRES_DATA_SOURCE, USER_REPOSITORY } from '../../common/constants';
import * as entities from '../entitiy';

export const DatabaseRepositoryProvider: FactoryProvider[] = [
  {
    provide: USER_REPOSITORY,
    inject: [POSTGRES_DATA_SOURCE],
    useFactory: (datasource: DataSource) => {
      return datasource.getRepository(entities.UserEntity);
    },
  },
];
