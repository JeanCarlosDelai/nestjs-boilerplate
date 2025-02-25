import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AllExceptionFilter } from '@src/shared/infra/filter/all-exeption.filter';
import { AppLogger } from '@src/shared/infra/logger/service/app-logger.service';

let app: INestApplication;

export const setupAppTest = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  app = moduleFixture.createNestApplication();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const appLogger = new AppLogger();
  app.useGlobalFilters(new AllExceptionFilter(appLogger));

  await app.init();
  return app;
};

export const teardownApp = async () => {
  if (app) {
    await app.close();
  }
};
