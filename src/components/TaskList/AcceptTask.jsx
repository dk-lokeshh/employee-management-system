import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, employeeId, taskIndex }) => {
  const { updateTaskStatus } = useContext(AuthContext) || {}

  const handleComplete = () => {
    if (updateTaskStatus && employeeId !== undefined && taskIndex !== undefined) {
      updateTaskStatus(employeeId, taskIndex, 'completed')
    }
  }

  const handleFailed = () => {
    if (updateTaskStatus && employeeId !== undefined && taskIndex !== undefined) {
      updateTaskStatus(employeeId, taskIndex, 'failed')
    }
  }

  return (
    <div className="flex-shrink-0 w-[320px] p-6 bg-[#232323] border border-yellow-500/40 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px]">
      <div>
        <div className="flex justify-between items-center text-xs">
          <span className="bg-yellow-500/20 text-yellow-300 font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-yellow-500/30">
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

      <div className="flex justify-between gap-3 mt-6 pt-4 border-t border-neutral-700/60">
        <button
          onClick={handleComplete}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] py-2 px-3 text-xs font-semibold rounded-lg text-white transition-all duration-150 cursor-pointer shadow-md shadow-emerald-950"
        >
          Mark as Completed
        </button>
        <button
          onClick={handleFailed}
          className="flex-1 bg-rose-600 hover:bg-rose-700 active:scale-[0.98] py-2 px-3 text-xs font-semibold rounded-lg text-white transition-all duration-150 cursor-pointer shadow-md shadow-rose-950"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
