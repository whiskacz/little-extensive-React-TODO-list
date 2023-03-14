import Task from './Task'
import React from 'react'



const TaskList = (props) => {
const active = props.tasks.filter(task => task.active)
const done = props.tasks.filter(task => !task.active)

console.log(active)
console.log(done)
const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

    return(
        <>
        <div className='active'></div>
        <h1>Zadania do zrobienia</h1>
        {active.length > 0 ? activeTasks : <span>Nie masz żadnych tasków</span>}
        <hr />
        <div className="done"></div>
        {done.length > 3 && <span style={{fontSize : "8px"}}>Wyświetlonych jest 3 ostatnich tasków</span>}
        <h2>Zadania skończone</h2>
        {doneTasks.slice(0,3)}
        </>
   )
}

export default TaskList