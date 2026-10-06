import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-7 sm:p-10 bg-[#1c1c1c]">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
