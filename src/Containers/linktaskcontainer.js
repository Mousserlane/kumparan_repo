import React, {Component} from 'react';
import {showModal} from '../Actions/interactionAction';
import {connect} from 'react-redux';

import linkinactive from '../icons/linked_inactive.png';
import linkactive from '../icons/linked_active.png';
import caretup from '../icons/caret_up.png';

import {showReply} from './replycontainer';

class LinkTaskContainer extends Component{
  constructor(props){
    super(props)
    console.log('LTC prop', this.props);
    this.state ={
      expandpost: false,
      showmodal: true
    }
  }

  handleClickExpand = () => {
      this.setState({
        expandpost: !this.state.expandpost
      }, ()=>{
        var showexpansion = this.state.expandpost
        var id = this.props.contentid
        this.props.expandPost(showexpansion, id)
      })
  }

  togglemodal = () =>{
    console.log('masuk');
    this.setState({showmodal: this.state.showmodal}, ()=>{
      var open = this.state.showmodal
      this.props.showModal(open)
    })
  }

  render(){
    return(
      <div className="col-md-12 pull-right">
      <div id="link-detail" style={{textAlign:"end"}}>
        <img id="link_inactive" src={linkinactive} onClick={this.togglemodal}/>
        <span onClick={this.handleClickExpand.bind(this)}><img src={caretup} /></span>
        <div id="linkednotif" className="kmprn-dropdown-bubble">Linked to detail</div>
      </div>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(LinkTaskContainer);
