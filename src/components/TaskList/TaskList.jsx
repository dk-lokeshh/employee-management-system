import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="overflow-x-auto no-scrollbar flex items-center justify-start gap-5 flex-nowrap w-full py-4 mt-10"
    >
      {data?.tasks?.map((elem, idx) => {
        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              employeeId={data.id}
              taskIndex={idx}
            />
          )
        }
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              employeeId={data.id}
              taskIndex={idx}
            />
          )
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
