import SourceForm from './SourceForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SourceFormLoadFromUrl() {
  const apiUrl = import.meta.env.VITE_SERVER_URL
  const apiPath = import.meta.env.VITE_API_PATH
  console.log(import.meta.env.VITE_SERVER_URL)
  console.log(import.meta.env.VITE_API_PATH)
  const { sourceId } = useParams()
  const [source, setSource] = useState([])
  // const [loading, setLoading] = useState(false);
  const getSourceData = async () => {
    try {
      const data = await axios.get(apiUrl + apiPath + '/sources/' + sourceId)
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
