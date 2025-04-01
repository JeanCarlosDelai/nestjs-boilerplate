import { ApolloDriver } from '@nestjs/apollo';
import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({})
export class CustomGraphQLModule {
  static register(): DynamicModule {
    const graphQLModule: DynamicModule = GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/shared/infra/graphql/schema.gql'),
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return { req };
      },
      cors: {
        credentials: true,
        origin: true
      },
      driver: ApolloDriver,
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error.message,
          locations: error.locations,
          path: error.path,
          extensions: {
            code: error.extensions?.originalError?.code || error.extensions.code,
            message: error.extensions?.originalError?.message,
            status: error.extensions?.originalError?.statusCode || 500
          }
        };
        return graphQLFormattedError;
      }
    });

    const customProviders = [];

    return {
      ...graphQLModule,
      providers: [...(graphQLModule.providers ?? []), ...customProviders]
    };
  }
}
