import BaseHttpService from '../../shared/service/base-http-service';

class AuthService extends BaseHttpService {

    async register(body) {
        try {
            const data = await this.post('auth/register', body);
            this.saveToken(data.token);
            return data;
        }
        catch (error) {}
        }

    async login(body) {
        try {
            const data = await this.post('auth/login', body);
            this.saveToken(data.token);
            return data;
        }
        catch (error) {}
    }

    async logout() {
        try {
            await this.post('auth/logout');
        }
        catch (error) {}
    }
}

export default AuthService;