import React, {Component} from 'react';

import TaskItemContainer from '../Containers/taskitemcontainer';

class TaskList extends Component{
  constructor(props){
    super(props)
    console.log(this.props);
  }
  render(){
    return(

        <div id="tasks" className="col-md-4">
          <div className="row">
          <div className="col-md-6">
            <button className="btn btn-md btn-block kmprn-btn kmprn-btn-color">Join</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-md btn-block kmprn-btn kmprn-btn-clear">Lock</button>
          </div>
          </div>
          <div className="row kmprn-taskitem">
            <div className="col-md-6 taskheader">Task Detail</div>
            <div className="col-md-6 taskheader-edit" style={{textAlign:"end"}}>Edit</div>
            <div className="col-md-12">
              <div className="kmprn-task-box">
                <div className="taskheader">{this.props.dataprops.title}</div>
                <div className=""><div className="row"><div className="col-md-6 taskitemdetail">TOR No.</div><div className="col-md-6 taskheader">: {this.props.dataprops.tornumber}</div></div></div>
                <div className=""><div className="row"><div className="col-md-6 taskitemdetail">Target Publish</div><div className="col-md-6 taskheader">: {this.props.dataprops.publishtarget}</div></div></div>
                <div className=""><div className="row"><div className="col-md-6 taskitemdetail">Total Contributor</div><div className="col-md-5 taskheader">: {this.props.dataprops.contributor}</div></div></div>
                <div className=""><p>{this.props.dataprops.detailContent}</p></div>
            </div>
            </div>
          </div>
          <div className="row kmprn-taskitem">
            <div className="col-md-6 taskheader">PIC</div>
            <div className="col-md-6 taskheader-edit" style={{textAlign:"end"}}>Edit</div>
            <div className="col-md-12">
              <div className="kmprn-task-box">
                <div className="taskheader">PIC {this.props.dataprops.pic[0].id}</div>
                  <div className=""><div className="row"><div className="col-md-4 ">Nama</div><div className="col-md-8 taskheader taskheader-edit">: {this.props.dataprops.pic[0].Nama} <br />({this.props.dataprops.pic[0].Initial})</div></div></div>
                  <div className=""><div className="row"><div className="col-md-4 ">Job</div><div className="col-md-8 ">: {this.props.dataprops.pic[0].Job}</div></div></div>
                  <div className=""><div className="row"><div className="col-md-4 ">Task</div><div className="col-md-8 ">: {this.props.dataprops.pic[0].Task}</div></div></div>
                {/*NOTE: NARASUMBER SECTION*/}
                <div className="taskheader" style={{marginTop:"10px"}}>Narasumber {this.props.dataprops.narasumber.id}</div>
                <div id="indent">
                  <div className=""><div className="row"><div className="col-md-4 ">Nama</div><div className="col-md-8 ">: {this.props.dataprops.narasumber.Nama}</div></div></div>
                  <div className=""><div className="row"><div className="col-md-4 ">Telepon</div><div className="col-md-8 ">: {this.props.dataprops.narasumber.Telepon}</div></div></div>
                  <div className=""><div className="row"><div className="col-md-4 ">Email</div><div className="col-md-8 ">: {this.props.dataprops.narasumber.Email}</div></div></div>
                </div>
                {/*NOTE: DETAIL TASK SECTION*/}
                <TaskItemContainer />
              </div>
            {/*New Tasks Box*/}
            <div className="kmprn-task-box">
              <div className="taskheader">PIC {this.props.dataprops.pic[0].id}</div>
                <div className=""><div className="row"><div className="col-md-4 ">Nama</div><div className="col-md-8 taskheader taskheader-edit">: {this.props.dataprops.pic[0].Nama} <br />({this.props.dataprops.pic[0].Initial})</div></div></div>
            </div>
            </div>
          </div>
        </div>

    )
  }
}

export default TaskList
