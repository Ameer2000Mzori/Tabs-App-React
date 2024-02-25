import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ApiFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios.get('https://course-api.com/react-tabs-project')

        if (!res.statusText === 'OK') {
          setError(true)
          setLoading(false)
          return
        }
        setData(res.data)
      } catch (err) {
        setError(true)
        setLoading(false)
        console.log(err)
      }
      setLoading(false)
    }
    getData()
  }, [])

  return { data, loading, error }
}

// https://course-api.com/react-tabs-project
