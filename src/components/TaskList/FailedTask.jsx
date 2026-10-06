import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] p-6 bg-[#232323] border border-rose-500/40 rounded-2xl flex flex-col justify-between shadow-xl min-h-[300px]">
      <div>
        <div className="flex justify-between items-center text-xs">
          <span className="bg-rose-600/30 text-rose-300 font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-500/30">
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
        <span className="block text-center w-full bg-rose-600/20 text-rose-400 border border-rose-500/40 py-2 px-4 text-sm font-semibold rounded-lg">
          ✕ Failed
        </span>
      </div>
    </div>
  )
}

export default FailedTask
