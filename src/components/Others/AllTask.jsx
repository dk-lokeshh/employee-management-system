import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { userData } = useContext(AuthContext) || {}

  const employees = userData?.employees || []

  return (
    <div className="bg-[#1c1c1c] border border-neutral-800 p-6 rounded-2xl mt-7 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-4">Team Task Overview</h2>

      {/* Table Header */}
      <div className="bg-[#2a2a2a] py-3 px-4 flex justify-between rounded-xl mb-3 text-sm font-semibold text-gray-300">
        <h2 className="w-1/5 text-left">Employee Name</h2>
        <h3 className="w-1/5 text-center text-blue-400">New Task</h3>
        <h5 className="w-1/5 text-center text-yellow-400">Active Task</h5>
        <h5 className="w-1/5 text-center text-emerald-400">Completed</h5>
        <h5 className="w-1/5 text-center text-rose-400">Failed</h5>
      </div>

      {/* Scrollable Rows */}
      <div className="max-h-64 overflow-y-auto no-scrollbar flex flex-col gap-2.5">
        {employees.length === 0 ? (
          <div className="py-6 text-center text-gray-400 text-sm">
            No employees found.
          </div>
        ) : (
          employees.map((emp) => (
            <div
              key={emp.id}
              className="border border-neutral-800 bg-[#161616] hover:bg-[#202020] transition-colors py-3 px-4 flex justify-between items-center rounded-xl text-sm"
            >
              <h2 className="w-1/5 text-left font-medium text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {emp.firstName}
              </h2>
              <div className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                  {emp.taskCounts?.newTask ?? 0}
                </span>
              </div>
              <div className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2 rounded-full bg-yellow-500/20 text-yellow-400 font-bold border border-yellow-500/30">
                  {emp.taskCounts?.active ?? 0}
                </span>
              </div>
              <div className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  {emp.taskCounts?.completed ?? 0}
                </span>
              </div>
              <div className="w-1/5 text-center">
                <span className="inline-block min-w-8 py-0.5 px-2 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
                  {emp.taskCounts?.failed ?? 0}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AllTask
