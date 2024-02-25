import React, { useEffect } from 'react'

const SelectedUser = ({ userData }) => {
  const { id, company, title, duties, dates } = userData
  return (
    <>
      <div key={id}>
        <h1>{company}</h1>
        <h2>{title}</h2>
        <h3>{duties}</h3>
        <h4>{dates}</h4>
      </div>
    </>
  )
}

export default SelectedUser
