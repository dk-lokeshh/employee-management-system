import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext) || {}

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }

    // Clone current employees array from context (or fallback to localStorage)
    const currentEmployees = userData?.employees
      ? JSON.parse(JSON.stringify(userData.employees))
      : JSON.parse(localStorage.getItem('employees')) || []

    const trimmedAssignee = assignTo.trim().toLowerCase()
    let found = false

    const updatedEmployees = currentEmployees.map((emp) => {
      if (emp.firstName.trim().toLowerCase() === trimmedAssignee) {
        found = true
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            newTask: (emp.taskCounts?.newTask || 0) + 1,
          },
          tasks: [...(emp.tasks || []), newTaskObj],
        }
      }
      return emp
    })

    if (!found) {
      alert(
        `Employee "${assignTo}" not found. Available employees: ${currentEmployees
          .map((e) => e.firstName)
          .join(', ')}`
      )
      return
    }

    // Persist to localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    // Synchronize AuthContext
    if (setUserData) {
      setUserData((prev) => ({
        ...prev,
        employees: updatedEmployees,
      }))
    }

    // Reset form inputs
    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
  }

  return (
    <div className="p-7 bg-[#1c1c1c] border border-neutral-800 mt-7 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-6">Create New Task</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#111] border border-neutral-700 text-white placeholder:text-gray-500 focus:border-emerald-500 transition"
              type="text"
              placeholder="e.g. Design Landing Page"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1">
              Due Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#111] border border-neutral-700 text-white placeholder:text-gray-500 focus:border-emerald-500 transition"
              type="date"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1">
              Assign To (Employee First Name)
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#111] border border-neutral-700 text-white placeholder:text-gray-500 focus:border-emerald-500 transition"
              type="text"
              placeholder="e.g. Arjun, Sneha, Ravi, Priya, Karan"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#111] border border-neutral-700 text-white placeholder:text-gray-500 focus:border-emerald-500 transition"
              type="text"
              placeholder="e.g. Design, Dev, DevOps, QA"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-1">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              rows={7}
              className="w-full text-sm py-2.5 px-3 rounded-lg outline-none bg-[#111] border border-neutral-700 text-white placeholder:text-gray-500 focus:border-emerald-500 transition resize-none"
              placeholder="Provide a detailed description of the task..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] py-3 px-6 rounded-lg text-sm font-semibold text-white mt-4 w-full transition duration-150 cursor-pointer shadow-lg shadow-emerald-950"
          >
            Create & Assign Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
