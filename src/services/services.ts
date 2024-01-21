import { ENV } from '../common/enums/enums';
import { Http } from './http/http.service';
import { Tasks } from './tasks/tasks.service';

const http = new Http();

const tasks = new Tasks({
  baseUrl: ENV.API.URL,
  http,
});

export { http, tasks };
