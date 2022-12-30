import { Link, useParams } from 'react-router-dom'
import SourceForm from '../components/SourceForm'

const Source = () => {
  const { sourceId } = useParams()

  return (
    <>
      <h2>Source: {sourceId}</h2>
      <SourceForm sourceId={sourceId} />
      <Link to="/sources">Back to Sources </Link>
    </>
  )
}

export default Source
