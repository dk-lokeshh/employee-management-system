import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  const updateTaskStatus = (employeeId, taskIndex, newStatus) => {
    setUserData((prev) => {
      if (!prev?.employees) return prev

      const updatedEmployees = prev.employees.map((emp) => {
        if (emp.id !== employeeId) return emp

        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx !== taskIndex) return task

          if (newStatus === 'accepted') {
            return {
              ...task,
              active: true,
              newTask: false,
              completed: false,
              failed: false,
            }
          }
          if (newStatus === 'completed') {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: true,
              failed: false,
            }
          }
          if (newStatus === 'failed') {
            return {
              ...task,
              active: false,
              newTask: false,
              completed: false,
              failed: true,
            }
          }
          return task
        })

        // Recalculate taskCounts dynamically from updatedTasks
        const taskCounts = {
          active: updatedTasks.filter((t) => t.active).length,
          newTask: updatedTasks.filter((t) => t.newTask).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        }

        const updatedEmp = {
          ...emp,
          tasks: updatedTasks,
          taskCounts,
        }

        // Update cached session if the active user matches
        try {
          const loggedInUserStr = localStorage.getItem('loggedInUser')
          if (loggedInUserStr) {
            const loggedInUser = JSON.parse(loggedInUserStr)
            if (loggedInUser.role === 'employee' && loggedInUser.data?.id === employeeId) {
              localStorage.setItem(
                'loggedInUser',
                JSON.stringify({ role: 'employee', data: updatedEmp })
              )
            }
          }
        } catch (err) {
          console.error('Error updating loggedInUser in localStorage', err)
        }

        return updatedEmp
      })

      // Persist to localStorage
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))

      return {
        ...prev,
        employees: updatedEmployees,
      }
    })
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, updateTaskStatus }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
