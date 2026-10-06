import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserId, setLoggedInUserId] = useState(null)
  const { userData } = useContext(AuthContext) || {}

  // Derive current employee dynamically from context
  const currentEmployee = userData?.employees?.find(
    (emp) => emp.id === loggedInUserId
  )

  // Session restoration on mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser)
        setUser(parsedUser.role)
        if (parsedUser.role === 'employee' && parsedUser.data?.id) {
          setLoggedInUserId(parsedUser.data.id)
        }
      } catch (err) {
        console.error('Failed to parse loggedInUser from localStorage', err)
      }
    }
  }, [])

  const handleLogin = (email, password) => {
    // 1. Admin login
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      setLoggedInUserId(null)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    // 2. Employee login
    if (userData?.employees) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserId(employee.id)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
        return
      }
    }

    // 3. Fallback alert
    alert('Invalid Credentials')
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={currentEmployee} />
      )}
    </div>
  )
}

export default App
