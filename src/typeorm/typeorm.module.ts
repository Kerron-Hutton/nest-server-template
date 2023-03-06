import { Global, Module } from '@nestjs/common';

import { DatabaseRepositoryProvider } from './provider/database-repository.provider';
import { PostgresProvider } from './provider/postgres.provider';

@Module({
  providers: [PostgresProvider, ...DatabaseRepositoryProvider],
  exports: [PostgresProvider, ...DatabaseRepositoryProvider],
})
@Global()
export class TypeormModule {}
