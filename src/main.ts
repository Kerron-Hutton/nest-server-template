import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { IAppConfiguration } from './config/app-configuration.interface';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  configureSwaggerApiDocumentation(app);

  const configService = app.get(ConfigService<IAppConfiguration, true>);

  await app.listen(configService.get('port'));
})();

function configureSwaggerApiDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('NestJs Server Template')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
}
