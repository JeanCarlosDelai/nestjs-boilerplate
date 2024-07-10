import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/shared/filters/AllException.filter';
import { AppModule } from 'src/app.module';

let app: INestApplication;

export const setupAppTest = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.init();
  return app;
};

export const teardownApp = async () => {
  if (app) {
    await app.close();
  }
};
