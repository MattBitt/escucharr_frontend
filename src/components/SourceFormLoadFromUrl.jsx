import SourceForm from './SourceForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SourceFormLoadFromUrl() {
  const { sourceId } = useParams()
  const [source, setSource] = useState([])
  // const [loading, setLoading] = useState(false);
  const getSourceData = async () => {
    try {
      const data = await axios.get(
        'http://127.0.0.1:5000/api/v1/sources/' + sourceId
      )
      setSource(data.data)
    } catch (e) {
      // console.error(e)
    }
  }
  useEffect(() => {
    getSourceData()
  }, [])

  return (
    <>
      <div>SourceFormLoadFromUrl</div>
      <SourceForm source={source} />;
    </>
  )
}

export default SourceFormLoadFromUrl
