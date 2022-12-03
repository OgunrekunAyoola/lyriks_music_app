import{ createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key', 'dd1999ddd1msh5d80adb769a7692p125d14jsndf4772024022');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
  });

  export const{
    useGetTopChartsQuery,
  } = shazamCoreApi