import React from 'react';

class EditTask extends React.Component{
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
                <input type ="text" name="to-do" value={this.state.todo} placeholder="edit to-do" onChange={this.handlechange}></input>
                <button type="button">Edit</button>
            </div>
        )
    }
}

export default EditTask;  