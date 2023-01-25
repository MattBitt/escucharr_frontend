import { Link, useParams } from 'react-router-dom'
import { useFetchData } from '@/hooks/useFetchApi'
import Button from '@mui/material/Button'
import { ButtonLink } from '../../../components/ButtonLink'
export const SourceForm = () => {
  const { sourceId } = useParams()
  const { data, error, loading } = useFetchData('sources/' + sourceId)
  return (
    <>
      <div>SourceForm</div>
      {loading && <div>Loading</div>}
      {/* error may not ever happen.  need to investigate */}
      {error && <div>Error!!!</div>}
      {!loading && (
        <div>
          <h1>{sourceId}</h1>
          <h1>{data.video_title}</h1>
          <ButtonLink
            url={'create_track/'}
            state={{ source: data }}
            caption="Create Track"
          />
          <ButtonLink url="/tracks/182" caption="asdf" />
          <Button href="/sources" variant="contained">
            Sources
          </Button>

          <Button href="/" variant="contained">
            Link
          </Button>
        </div>
      )}
    </>
  )
}
