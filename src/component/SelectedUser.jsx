import React, { useEffect } from 'react'

const SelectedUser = ({ userData }) => {
  const { id, company, title, duties, dates } = userData
  return (
    <>
      <div
        key={id}
        className="h-[500px] flex flex-col text-center items-center justify-evenly p-4"
      >
        <h1>role : {title}</h1>
        <h6> at : {company}</h6>
        <h3 className="text-[15px] overflow-auto">{duties}</h3>
        <h4>{dates}</h4>
      </div>
    </>
  )
}

export default SelectedUser
