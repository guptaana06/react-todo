import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import CreateTask from './components/createtask';
import EditTask from './components/edittask';
import DeleteTask from './components/deletetask';


class App extends React.Component {

  constructor(){
    super();
    
  }
  render(){
  return (<React.Fragment>
    <Router>
      <div className=" container">
        <div className="row">
        <div className="col-md-4"><Link to="/create"><button type="button" className="btn btn-info" >create task</button></Link></div>
        <div className="col-md-4"><Link to="/edit"><button type="button" className="btn btn-primary">edit task</button></Link></div>
        <div className="col-md-4"><Link to="/del"><button type="button" className="btn btn-danger">delete task</button></Link></div>

        </div>
      </div>
      
        <Route exact path="/create" component = {CreateTask}/>
        <Route  path="/edit" component = {EditTask}></Route>
        <Route  path="/del" component = {DeleteTask}></Route>
   

      </Router>
      </React.Fragment>
  );
}
}

export default App;
