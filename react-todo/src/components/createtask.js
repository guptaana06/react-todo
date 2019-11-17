import React from 'react';

class CreateTask extends React.Component{
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
                <input type ="text" name="to-do" value={this.state.todo} placeholder="create to-do" onChange={this.handlechange}></input>
                <button type="button">Create</button>
            </div>
        )
    }
}

export default CreateTask;  