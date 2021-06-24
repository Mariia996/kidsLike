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
            const data = await this.post('task', body);
            return data;
        }
        catch (error) {}
    }
    async patchSingleTask(id, body) {
        try {
            this.loadToken();
            const data = await this.patch(`task/single-active/${id}`, body);
            return data;
        }
        catch (error) {}
    }
    async patchSwitchComplete(id, body) {
        try {
            this.loadToken();
            const data = await this.patch(`task/switch/${id}`, body);
            return data;
        }
        catch (error) {}
    }
}

export default TasksService;