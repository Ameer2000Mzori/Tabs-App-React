import React, { useState, useEffect } from 'react'
import { ApiFetch } from './hooks/ApiFetch.jsx'
import SelectedUser from './SelectedUser.jsx'
const Tabs = () => {
  const { data, loading, error } = ApiFetch()

  const [selectedTab, setSelectedTab] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    if (data) {
      setSelectedTab(data[0])
      setUserData(data[0])
    }
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (data.length === 0) return <div>There are no users.</div>
  return (
    <div className="flex flex-col text-center items-center justify-center h-[100vh] w-[100vw]">
      <div className="flex flex-row text-center items-center justify-center h-[100vh] w-[100vw]">
        <aside className="w-[5%] h-[500px] bg-zinc-500 text-white">
          <h2>tabs</h2>
          {data.map((user) => {
            return (
              <div
                className="bg-zinc-300 text-black cursor-pointer p-2"
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
        <aside className="w-[25%] h-[500px] bg-zinc-600 text-white">
          {selectedTab && <SelectedUser userData={userData} />}
        </aside>
      </div>
    </div>
  )
}

export default Tabs
