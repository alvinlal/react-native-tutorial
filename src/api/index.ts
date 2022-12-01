import {API_ENDPOINT} from '@env';
import axios from 'axios';

const axiosClient = axios.create({baseURL: API_ENDPOINT});

export default axiosClient;
