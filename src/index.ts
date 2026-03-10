
import type { User, ApiConfig } from './types';
import { createIoCContainer } from './ioc';
import { Logger } from './services/logger';

const renderUsers = async (usersService: any) => {
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;
  const ioc = createIoCContainer();
  ioc.register('apiConfig', config.api);
  const usersService = ioc.resolve('users');
  renderUsers(usersService);
};

window.onload = (event: Event) => {
  const logger = new Logger();

  logger.info('Page is loaded.');
  
  app();
};
