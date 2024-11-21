import { OCR_API_KEY } from '@env';
import axios from 'axios';

const OCR_BASE_URL = 'https://ck56l1mg01.execute-api.eu-west-1.amazonaws.com/Prod/process';

const ocrApi = axios.create({
  baseURL: OCR_BASE_URL,
  headers: {
    'x-api-key': OCR_API_KEY,
  },
});

export default ocrApi;
