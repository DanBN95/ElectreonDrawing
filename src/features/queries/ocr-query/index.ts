import { OCR_API_KEY } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const OCR_BASE_URL = 'https://ck56l1mg01.execute-api.eu-west-1.amazonaws.com/Prod/process';

type UploadImageResponse = {
  data: string;
  message: string;
};

export const optCharRecognitionApi = createApi({
  reducerPath: 'optCharRecognitionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: OCR_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', OCR_API_KEY);
      headers.set('Content-Type', 'image/png');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation<UploadImageResponse, string>({
      query: (base64Image) => ({
        url: '/',
        method: 'POST',
        body: base64Image,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = optCharRecognitionApi;
