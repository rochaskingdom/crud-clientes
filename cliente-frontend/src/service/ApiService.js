import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/clientes';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteCliente(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addCliente(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editCliente(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();