import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchData = (urlEndpoint) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'http://127.0.0.1:9000/' + urlEndpoint
        )
        setData(response)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return {
    data,
    error,
    loading,
  }
}
