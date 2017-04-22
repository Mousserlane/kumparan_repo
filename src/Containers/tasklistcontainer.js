import React, {Component} from 'react';

import TaskList from '../Components/tasklist';

class TaskListContainer extends Component{
  constructor(){
    super();

    const taskDetail={
      taskTitle: "#AdaApaDenganPizza",
      torNo: "KUM01",
      targetPublish: '21/09/2016',
      totalContributor: 10,
      content: "Kasus ini adalah masalah kadaluwarsa dari produk Pizza Hut, PHD, dan Marugame Udon"
    }

    const PIC=[{
      id: 1,
      Nama: "Eunike Kartini",
      Initial: "EK",
      Job: "Reporter",
      Task: "Kontak BBC Indonesia",
    },
    {
      id: 2,
      Nama: "Eunike Kartini",
      Initial: "EK"
    }
]

    const Narasumber ={
      id: 1,
      Nama: "Sujono",
      Telepon: "+62812121",
      Email: "diasikin@je"
    }

    this.state={
      title: taskDetail.taskTitle,
      tornumber: taskDetail.torNo,
      publishtarget: taskDetail.targetPublish,
      contributor: taskDetail.totalContributor,
      detailContent: taskDetail.content,
      narasumber: Narasumber,
      pic: PIC
    }
  }

  render(){
    return(
      <TaskList dataprops={this.state} />
    )
  }
}

export default TaskListContainer
