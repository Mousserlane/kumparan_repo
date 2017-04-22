import React, { Component } from 'react';
import {showModal} from './Actions/interactionAction';
import {connect} from 'react-redux';

import './App.css';
import './kumparan.css';

import Header from './Components/header';
import Modal from './Components/modal';
import MainContent from './Components/maincontent';
import SideMenu from './Components/sidemenu';

class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="container-fluid App">
        <Modal modalopen={this.props.showmodal} onclose={this.props.showModal}/>
        <div className="row">
          <div className="col-md-3">
            <SideMenu />
          </div>
          <div className="col-md-9">
            <Header />
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    showmodal: state.interactionReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    showModal: (showmodal) =>{
      dispatch(showModal(showmodal))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
