import axios from 'axios';

import { getLogger } from '../../../components/logger';

const logger = getLogger();

const shopifyApiClient = axios.create({
  baseURL: '',
  timeout: 30000,
});

shopifyApiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    logger.error(err);
    return Promise.reject(err);
  },
);

export default shopifyApiClient;
