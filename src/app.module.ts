import { Module } from '@nestjs/common';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/app-configuration';

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
