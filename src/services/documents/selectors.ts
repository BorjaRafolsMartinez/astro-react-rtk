import {
  createSelector,
} from '@reduxjs/toolkit'

import {
  DocumentType,
} from '@root/domain/Model/DocumentType'
import {
  RootState,
} from '@root/store/Reducer'

import {
  insurerApi,
} from './index'

const baseSelector = insurerApi.endpoints.getDocumentTypes.select()

export const selectUsersResult = insurerApi.endpoints.getDocumentTypes.select()

const emptyUsers: DocumentType[] = []

export const selectAllDocumentTypes = createSelector(
  baseSelector,
  documentTypesResult => documentTypesResult?.data ?? emptyUsers
)

export const selectDocumentTypeByKey = createSelector(
  selectAllDocumentTypes,
  (state: RootState, key: string) => key,
  (documentTypes: DocumentType[], key: string) => {
    return documentTypes.find(document => document.key === key)
  }
)
