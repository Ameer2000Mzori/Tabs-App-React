import React, { useEffect } from 'react'

const SelectedUser = (props) => {
  useEffect(() => {
    console.log(props)
  }, [props])

  return <div>SelectedUser</div>
}

export default SelectedUser
