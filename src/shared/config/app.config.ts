import { registerAs } from '@nestjs/config';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import validateConfig from '../utils/validate-config';
import { AppConfig } from './app-config.type';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariablesValidator {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @IsInt()
  @Min(0)
  @Max(65535)
  @IsOptional()
  APP_PORT: number;
}

export default registerAs<AppConfig>('app', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    nodeEnv: process.env.NODE_ENV || Environment.Development,
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3000,
  };
});
