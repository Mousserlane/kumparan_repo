import React, {Component} from 'react';

import TaskListContainer from '../Containers/tasklistcontainer';
import MainBoard from '../Components/mainboard';

class MainContent extends Component{

  render(){
    return(
      <div className="kmprn-task-header">
      <div className="row kmprn-task-header">
        <div className="col-md-8">Back to Task Status</div>
        <div className="col-md-4 pull-right" style={{textAlign: "end"}}>In Progress</div>
      </div>
        <div id="post-task-container" className="row">
          <TaskListContainer />
          <MainBoard />
        </div>
      </div>
    )
  }
}
export default MainContent
