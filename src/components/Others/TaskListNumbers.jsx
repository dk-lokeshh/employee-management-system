import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      {/* New Task - Blue */}
      <div className="rounded-2xl py-6 px-8 bg-blue-600 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {data?.taskCounts?.newTask ?? 0}
        </h2>
        <h3 className="text-xl mt-1 font-semibold text-blue-100">
          New Task
        </h3>
      </div>

      {/* Completed Task - Green */}
      <div className="rounded-2xl py-6 px-8 bg-emerald-600 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {data?.taskCounts?.completed ?? 0}
        </h2>
        <h3 className="text-xl mt-1 font-semibold text-emerald-100">
          Completed Task
        </h3>
      </div>

      {/* Accepted / Active Task - Yellow */}
      <div className="rounded-2xl py-6 px-8 bg-yellow-500 text-black shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {data?.taskCounts?.active ?? 0}
        </h2>
        <h3 className="text-xl mt-1 font-semibold text-neutral-900">
          Accepted Task
        </h3>
      </div>

      {/* Failed Task - Red */}
      <div className="rounded-2xl py-6 px-8 bg-rose-600 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {data?.taskCounts?.failed ?? 0}
        </h2>
        <h3 className="text-xl mt-1 font-semibold text-rose-100">
          Failed Task
        </h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
