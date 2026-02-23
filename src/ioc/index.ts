
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import type { ApiConfig } from '../types';
import IoCContainer from 'ioc-lite';

export const createIoCContainer = (apiConfig: ApiConfig) =>  {
  const ioc = new IoCContainer();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  ioc.register('apiConfig', apiConfig);
  return ioc;
};
