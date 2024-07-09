import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { AllExceptionsFilter } from './shared/common/filters/AllException.filter';
import { ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './shared/swagger/swagger-setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, disableErrorMessages: false })
  );
  swaggerSetup(app);
  await app.listen(3000);
}
bootstrap();
