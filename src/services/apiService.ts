import query from '@reduxjs/toolkit/query'
import {
  createApi, fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

console.log('query', query)

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_BASE_URL,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json')
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  keepUnusedDataFor: 10,
  endpoints: () => ({})
})
