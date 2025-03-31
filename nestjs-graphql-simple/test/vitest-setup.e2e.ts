import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';

let app: INestApplication;

export const setupAppTest = async (): Promise<INestApplication> => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  app = moduleFixture.createNestApplication();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.init();
  return app;
};

export const teardownApp = async () => {
  if (app) {
    await app.close();
  }
};
