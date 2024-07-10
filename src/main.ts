import { NestFactory } from '@nestjs/core';
import { AllExceptionsFilter } from './shared/filters/AllException.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './shared/swagger/swagger-setup';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './shared/config/config.type';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<AllConfigType>);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, disableErrorMessages: false })
  );
  swaggerSetup(app);
  await app.listen(configService.getOrThrow('app.port', { infer: true }));
  logger.log(
    `API Nest it ruuning: ${configService.get('app.port', { infer: true })}`
  );
}
bootstrap();
