import React, {Component} from 'react'
import './App.css'
import TaskList from './TaskList'
import AddTask from './AddTask'


class App extends Component {
state ={
  tasks: [
    { id: 1, text: "zrobić dobry uczynek", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: false, finishDate: null },
    { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: false, finishDate: null },
    { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
    { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
  ]
}

deleteTask = (id) => {
  console.log("usunięcie Taska" + id)
  let tasks = [...this.state.tasks]
  tasks = tasks.filter(task => task.id !== id)
  this.setState({
    tasks
  })
}

changeTaskStatus =(id) => {
  console.log("zmiana statusu Taska" + id)
  let tasks = [...this.state.tasks]
  tasks.forEach(task => {
  if(task.id === id){
    task.active = !task.active
    task.finishDate = new Date().getTime()
  }
  
  this.setState({
    tasks
  })
}
)
}
  render(){
  return (
    <div className="App">
      TODO APP
      <AddTask />
      <TaskList tasks={this.state.tasks} change={this.changeTaskStatus} delete={this.deleteTask}/>
    </div>
  );
}
}
export default App;
