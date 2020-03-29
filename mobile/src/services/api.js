import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.11.8:3333'
});

export default api;