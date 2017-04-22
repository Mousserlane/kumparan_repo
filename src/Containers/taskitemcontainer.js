import React, {Component} from 'react';
import TaskItems from '../Components/taskitems';

class TaskItemContainer extends Component{
  constructor(){
    super();

    const DetailTasks =[
      {id: 1, taskcontent: "Temukan data dokumen PHD"},
      {id: 2, taskcontent: "Wawancara dengan pertanyaan: 1. skakaksfas 2. asdasdas"}
    ]

    this.state={
      tasks: DetailTasks
    }
    console.log("masuk?",this.state);
  }

  render(){
    return(
      <TaskItems taskprop={this.state}/>
    )
  }

}

export default TaskItemContainer
