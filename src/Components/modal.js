import React, {Component} from 'react';
import {showModal} from '../Actions/interactionAction';
import {connect} from 'react-redux';

import PostContainer from '../Containers/postcontainer';
import checkmarkgrey from '../icons/checkmark_grey.png';
import closeicon from '../icons/close-button-trans.png';

class Modal extends Component{
  constructor(props){
    super(props);
    this.state = {
      closemodal: false
    }
  }

  closemodal(){
    console.log('masuk');
    this.setState({closemodal: this.state.closemodal}, ()=>{
      var negation = this.state.closemodal
      this.props.onclose(negation)
    })
  }
  render(){
    if(!this.props.modalopen.showmodal){
      return null
    }
    return(
      <div className="">
        <div className="kmprn-modal">
          <div className="close-btn" onClick={this.closemodal.bind(this)}>
            <img src={closeicon}/>
          </div>
          <div className="modal-header">
            <h2>All CARDS CREATED BY STEFANI AULIA</h2>
          </div>
          <div className="modal-info">
            <p><span><img src={checkmarkgrey}/></span>
            Select a card that has relation to detail task "Temukan data dokumen PHD"</p>
          </div>
          <div className="modalpostcontainer">
            <PostContainer />
          </div>
          <div className="modal-footer" style={{display:"flex", justifyContent:"flex-end"}}>
            <div className="col-md-3">
              <button className="btn btn-block btn-sm kmprn-btn kmprn-btn-clear">Cancel</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-block btn-sm kmprn-btn kmprn-btn-color">Save</button>
            </div>
          </div>
        </div>
        <div className="kmprn-modal-backdrop"></div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    showmodal: state.interactionReducer
  }
}

export default connect(mapStateToProps)(Modal)
