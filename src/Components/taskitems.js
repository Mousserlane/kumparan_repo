import React, {Component} from 'react';
import checkmarker from '../icons/check_marker.png';

class TaskItems extends Component{
  constructor(props){
    super(props)

    console.log('taskitem', this.props);
  }

  render(){
    return(
      <div id="tasklist">
        <div className="taskheader" style={{marginTop:"10px"}}>Detail Task</div>
        <div className=""><div className="row"><div className="col-md-1"><span className="checkbox"><img src={checkmarker} /></span></div><div className="col-md-10 taskdetail">{this.props.taskprop.tasks[0].taskcontent}</div></div></div>
        <div className=""><div className="row"><div className="col-md-1"><span className="checkbox"><img src={checkmarker} /></span></div><div className="col-md-10 taskdetail">{this.props.taskprop.tasks[1].taskcontent}</div></div></div>
      </div>
    )
  }

}

export default TaskItems
