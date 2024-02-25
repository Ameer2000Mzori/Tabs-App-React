import React from 'react'
import { ApiFetch } from './hooks/ApiFetch.jsx'
const Tabs = () => {
  const { data, loading, error } = ApiFetch()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h1>data is here{console.log(data)}</h1>
    </div>
  )
}

export default Tabs
