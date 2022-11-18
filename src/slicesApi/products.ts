import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsAPi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<any, void>({
            query: () => '/posts',
        }),
        getProduct: builder.query<any, string>({
            query: (id) => `/posts/${id}`,
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = productsApi