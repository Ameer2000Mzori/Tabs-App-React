import React, { useState } from 'react'
import { ApiFetch } from './hooks/ApiFetch.jsx'
import SelectedUser from './SelectedUser.jsx'
const Tabs = () => {
  const { data, loading, error } = ApiFetch()
  const [selectedTab, setSelectedTab] = useState(data[0])
  const [userData, setUserData] = useState()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <aside>
        <h2>tabs</h2>
        {data.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => {
                setSelectedTab(true)
                setUserData(user)
              }}
            >
              <h1>{user.company}</h1>
            </div>
          )
        })}
      </aside>
      <aside>{selectedTab && <SelectedUser userData={userData} />}</aside>
    </div>
  )
}

export default Tabs
