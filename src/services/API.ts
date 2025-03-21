import axios from 'axios';

class API {
    private baseURL = 'http://localhost:3000/api'; // Ajusta esta URL a tu backend

    async test() {
        try {
            const response = await axios.get(`${this.baseURL}/test`);
            console.log('Conexión exitosa:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error de conexión:', error);
            throw error;
        }
    }
}

export default new API(); 