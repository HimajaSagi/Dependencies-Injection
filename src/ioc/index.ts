
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import IoCContainer from 'ioc-lite';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  return ioc;
};
