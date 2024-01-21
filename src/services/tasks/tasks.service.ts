import { ApiPath, ContentType } from '../../common/enums/enums';
import { type Task } from '../../common/types/types';
import { Http } from '../http/http.service';

type Constructor = {
  baseUrl: string;
  http: Http;
};

class Tasks {
  private http: Http;

  private baseUrl: string;

  private basePath: string;

  constructor({ baseUrl, http }: Constructor) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.basePath = ApiPath.TASKS;
  }

  public getAll(): Promise<Task[]> {
    return this.http.load(this.getUrl(), {
      method: 'GET',
    });
  }

  public getById(id: string): Promise<Task> {
    return this.http.load(this.getUrl(`/${id}`), {
      method: 'GET',
    });
  }

  public create(task: Task): Promise<Task> {
    return this.http.load(this.getUrl(), {
      method: 'POST',
      contentType: ContentType.JSON,
      payload: JSON.stringify(task),
    });
  }

  public update(task: Partial<Task>): Promise<Task> {
    return this.http.load(this.getUrl(`/${task.id}`), {
      method: 'PATCH',
      contentType: ContentType.JSON,
      payload: JSON.stringify(task),
    });
  }

  private getUrl(path = ''): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export { Tasks };
