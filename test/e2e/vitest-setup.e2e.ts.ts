import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/modules/app/app.module';
import { AllExceptionsFilter } from 'src/shared/common/filters/AllException.filter';

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
