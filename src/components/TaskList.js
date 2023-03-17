import Task from './Task'
import React from 'react'



const TaskList = (props) => {
const active = props.tasks.filter(task => task.active)
const done = props.tasks.filter(task => !task.active)

if(done.length >= 2){
done.sort((a,b)=>{
    if(a.finishDate < b.finishDate){
        return 1
    }
    if(a.finishDate > b.finishDate){
        return -1
    }
    
        return 0
    
})}
if(active.length >=2){
    active.sort((a,b)=>{

        a = a.text.toLowerCase();
        b = b.text.toLowerCase();

        if(a < b) return -1;
        if(a > b) return 1;
        return 0
    })
}


const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
console.log(` dlugosc done ${active.length}`)
console.log(doneTasks.length)
    return(
        <>
        <div className='active'></div>
        <h1>Zadania do zrobienia</h1>
        {active.length > 0 ? activeTasks : <span>Nie masz żadnych tasków</span>}
        <hr />
        <div className="done"></div>
        {done.length > 3 && <span style={{fontSize : "8px"}}>Wyświetlonych jest 3 ostatnich tasków</span>}
        {doneTasks.length === 0 ? <h2>Brak ukończonych zadań</h2> : <h2>Zadania skończone ({done.length})</h2>}
        {doneTasks.slice(0,3)}
        </>
   )
}

export default TaskList