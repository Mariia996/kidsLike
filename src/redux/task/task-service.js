import BaseHttpService from '../../shared/service/base-http-service';

class TasksService extends BaseHttpService {
    async getTasks() {
        try {
            this.loadToken();
            const data = await this.get('user/info');
            return data;
        }
        catch (error) {}
    }
    async addTask(body) {
        try {
            this.loadToken();
            const data = await this.post('user/info', body);
            return data;
        }
        catch (error) {}
    }
}

export default TasksService;