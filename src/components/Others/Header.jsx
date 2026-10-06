import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    if (props.changeUser) {
      props.changeUser('')
    }
  }

  const username = props.data?.firstName || 'Admin'

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold text-white">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 active:scale-95 text-base font-medium text-white px-5 py-2 rounded-sm transition-all duration-200 cursor-pointer"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
