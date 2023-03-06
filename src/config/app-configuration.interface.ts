export type NodeEnv = 'dev' | 'staging' | 'prod';

export interface IAppConfiguration {
  port: number;
  environment: NodeEnv;
  database: {
    synchronize: boolean;
    logging: boolean;
    username: string;
    password: string;
    port: number;
    host: string;
    name: string;
  };
}
