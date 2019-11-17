import React from 'react';

class DeleteTask extends React.Component{
    constructor(){
        super();
        this.state={
           todo:'' 
        }
    }

    handlechange=(e)=>{
        this.setState({todo:e.target.value})
    }
    render(){
        return(
            <div>
                <input type ="text" name="to-do" value={this.state.todo} placeholder="delete to-do" onChange={this.handlechange}></input>
                <button type="button">Delete</button>
            </div>
        )
    }
}

export default DeleteTask;  