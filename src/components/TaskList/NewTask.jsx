import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, employeeId, taskIndex }) => {
  const { updateTaskStatus } = useContext(AuthContext) || {}

  const handleAccept = () => {
    if (updateTaskStatus && employeeId !== undefined && taskIndex !== undefined) {
      updateTaskStatus(employeeId, taskIndex, 'accepted')
    }
  }

  return (
    <div className="flex-shrink-0 w-[320px] p-6 bg-[#232323] border border-blue-500/40 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px]">
      <div>
        <div className="flex justify-between items-center text-xs">
          <span className="bg-blue-600/30 text-blue-300 font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/30">
            {data?.category || 'Task'}
          </span>
          <span className="text-gray-400 font-medium">
            {data?.taskDate || 'No date'}
          </span>
        </div>
        <h2 className="mt-4 text-xl font-bold text-white line-clamp-1">
          {data?.taskTitle || 'Untitled Task'}
        </h2>
        <p className="text-sm mt-2.5 text-gray-300 leading-relaxed line-clamp-4">
          {data?.taskDescription || 'No description provided.'}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-neutral-700/60">
        <button
          onClick={handleAccept}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] py-2 px-4 text-sm font-semibold rounded-lg text-white transition-all duration-150 cursor-pointer shadow-md shadow-blue-950"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
