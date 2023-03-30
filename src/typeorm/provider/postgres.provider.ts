import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { IAppConfiguration } from '@config/app-configuration.interface';
import { POSTGRES_DATA_SOURCE } from '@common/constants';
import * as entities from '../entitiy';

const entityResolver = () => Object.values(entities);

export const PostgresProvider: FactoryProvider = {
  inject: [ConfigService],
  provide: POSTGRES_DATA_SOURCE,
  useFactory: (configService: ConfigService<IAppConfiguration, true>) => {
    const dbConfig = configService.get('database', { infer: true });

    const datasource = new DataSource({
      entities: [...entityResolver()],
      synchronize: dbConfig.synchronize,
      password: dbConfig.password,
      username: dbConfig.username,
      logging: dbConfig.logging,
      database: dbConfig.name,
      host: dbConfig.host,
      port: dbConfig.port,
      type: 'postgres',
    });

    return datasource.initialize();
  },
};
