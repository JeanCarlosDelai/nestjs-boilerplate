import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (app: INestApplication): void => {
  const configSwagger = new DocumentBuilder()
    .setTitle('Nest-Boilerplate API REST Simple')
    .setDescription('API developed with NESTJS')
    .setVersion('1.0')
    .build();
  const swaggerOpts = {
    swaggerOptions: {
      apisSorter: 'alpha',
      tagsSorter: 'alpha',
      operationsSoreter: 'alpha'
    }
  };
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api-docs', app, document, swaggerOpts);
};
