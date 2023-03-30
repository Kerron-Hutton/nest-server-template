import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { TypeormModule } from '@typeorm/typeorm.module';

import configuration from './config/app-configuration';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeormModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
