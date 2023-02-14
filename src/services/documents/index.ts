import type {
  DocumentType
} from './../../domain/Model/DocumentType'
import {
  apiService
} from './../apiService'

interface DocumentTypesResponse {
  items: DocumentType[]
}

export const insurerApi = apiService.injectEndpoints({
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getDocumentTypes: builder.query<DocumentType[], void>({
      query: () => 'api/home/document-types',
      transformResponse: (response: DocumentTypesResponse) => {
        return response.items
      }
    })
  })
})

export const {
  useGetDocumentTypesQuery
} = insurerApi
