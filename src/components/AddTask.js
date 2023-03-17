import React, {Component} from 'react'
import './AddTask.css'


class AddTask extends Component{

    minDate = new Date().toISOString().slice(0,10);
    state={
        checked : false,
        date: this.minDate,
        text: "",

    }
    handleText = (e) =>{
        this.setState({
            text : e.target.value
        })
    }

    handleChange = (e) =>{
        this.setState({
            date : e.target.value
        })
    }
    handleCheck = (e) =>{
        this.setState({
            checked : e.target.checked
        })
    }
    handleMain = () =>{
       
        const {text, date, checked} = this.state;
        if(text.length > 1){
        const add = this.props.addTask(text, date, checked);
        if(add){
            this.setState({
            text: "",
            date: this.minDate,
            checked : false,
            })
        }}
        else{
            alert("za krótka nazwa")
        }
    }


    render(){
       
        let maxDate = this.minDate.slice(0,4) * 1 + 1
        maxDate = maxDate+"-12-31"
        return(
            

            <div className='form'>
            <input type="text" placeholder='dodaj zadanie' onChange={this.handleText} value={this.state.text}/>
            <input type="checkbox" id="check" checked={this.state.checked} onChange={this.handleCheck}/>
            <label htmlFor="check">Priorytet</label>
            <br />
            <label htmlFor="date">Do kiedy zrobić  </label>
            <input type="date" onChange={this.handleChange} value={this.state.date} min={this.minDate} max={maxDate} />
            <br />
            <button onClick={this.handleMain}>DODAJ</button>
            </div>
            
        )
    }
}

export default AddTask