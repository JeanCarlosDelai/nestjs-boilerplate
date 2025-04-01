import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggerFactory } from './shared/module/logger/logger.factory';
import { ConfigService } from './shared/module/config/config.service';

async function bootstrap() {
  const logger = LoggerFactory('appplication-main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('port');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useLogger(logger);

  await app.listen(port);
  logger.log(`API Nest it ruuning: ${port}`, 'main');
}

bootstrap();
