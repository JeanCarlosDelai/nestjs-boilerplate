import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './shared/swagger/swagger.setup';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggerFactory } from './shared/infra/logger/logger.factory';
import { ConfigService } from './shared/infra/config/config.service';
import { AppLogger } from './shared/infra/logger/app-logger.service';
import { AllExceptionFilter } from './shared/infra/filter/all-exeption.filter';

async function bootstrap() {
  const logger = LoggerFactory('appplication-main');
  const appLogger = new AppLogger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('port');

  app.useGlobalFilters(new AllExceptionFilter(appLogger));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useLogger(logger);

  swaggerSetup(app);
  await app.listen(port);
  logger.log(`API Nest it ruuning: ${port}`, 'main');
}

bootstrap();
