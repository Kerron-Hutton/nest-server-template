import { IAppConfiguration, NodeEnv } from './app-configuration.interface';

export default (): IAppConfiguration => {
  const dbLogging = (process.env.DATABASE_LOGGING as string).toLowerCase();

  const environment = process.env.NODE_ENV as NodeEnv;

  return {
    environment,
    port: Number(process.env.SERVER_PORT) | 3000,
    database: {
      username: process.env.DATABASE_USERNAME as string,
      password: process.env.DATABASE_PASSWORD as string,
      host: process.env.DATABASE_HOST as string,
      name: process.env.DATABASE_NAME as string,
      port: Number(process.env.DATABASE_PORT),
      synchronize: environment === 'dev',
      logging: dbLogging === 'true',
    },
  };
};
