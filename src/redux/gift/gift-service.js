import BaseHttpService from '../../shared/service/base-http-service';

class GiftsServise extends BaseHttpService {
    async getGifts() {
        try {
            this.loadToken();
            const data = await this.get('gift');
            return data;
        }
        catch (error) {}
    }
    async buyGifts(body) {
        try {
            this.loadToken();
            const data = await this.patch('gift', body);
            return data;
        }
        catch (error) {}
    }
}

export default GiftsServise;