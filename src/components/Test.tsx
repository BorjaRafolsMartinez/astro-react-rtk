import { useGetDocumentTypesQuery } from '../services/documents'

const Test = (): JSX.Element => {
  const { data } = useGetDocumentTypesQuery()

  return (
    <div>
      <label>
        as
      </label>
      <ul>
        {data?.map(documentType => {
          return <li key={documentType.key}>{documentType.label}</li>
        })}
      </ul>
    </div>
  )
}

export default Test
