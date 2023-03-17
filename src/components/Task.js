import React from 'react'


const style = {
    color: "red"
}
const Task = (props) => {
   
    const {text, date, id, important, active, finishDate} = props.task;
    if(active){
    return(
        <div>
            <strong style={important? style: null}>{text}</strong>  do <span>{date}  </span>
            <button onClick={() => props.change(id)}>Zostało zrobione</button>
            <button onClick={() => props.delete(id)}>X</button>
            
            
        </div>
    )} else{
        const finish = new Date(finishDate).toLocaleDateString()
        return(
            <div>
                <strong style={important? style: null}>{text}</strong>  do <span>{date}  </span><span>(Potwierdzenie wykonania {finish})</span>
                <button onClick={() => props.change(id)}>Zmień status</button>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        )
    }
}

export default Task;