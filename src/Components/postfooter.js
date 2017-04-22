import React, {Component} from 'react';

import {showPopup} from '../Actions/interactionAction';
import {connect} from 'react-redux';

import ReplyContainer from '../Containers/replycontainer';

import replyicon from '../icons/reply_icon.png';
import moreicon from '../icons/more_icon.png';


class PostFooter extends Component{
  constructor(props){
    super(props)
    this.state ={
      showreplyclicked: false,
      showpopupclicked: false
    }
  }

  handleClickReply = () => {
      this.setState({
        showreplyclicked: !this.state.showreplyclicked
      }, ()=>{
        var showreply = this.state.showreplyclicked
        var id = this.props.id
        this.props.expandreply(showreply, id)
      })
  }

  handleClickMenu = () => {
    console.log('masuk');
    this.setState({
      showpopupclicked: !this.state.showpopupclicked
    }, () => {
      var showpopup = this.state.showpopupclicked
      this.props.showPopup(showpopup)
    })
  }

  render(){
    switch(this.props.section){
      case "post":
      return(
        <div className="col-md-12">
          <div className="col-md-6" onClick={this.handleClickReply.bind(this)}>
            <img src={replyicon} />
            <span>3</span>
          </div>
          <div className="col-md-6 pull-right" style={{textAlign: "end"}}
            onClick={this.handleClickMenu.bind(this)}>
            <img src={moreicon} />
          </div>
        </div>
      )
      break;
      case "reply":
      return(
        <div className="col-md-12">
          <div className="col-md-3" onClick={this.handleClickReply.bind(this)}>
            <img src={replyicon} />
            <span>2</span>
          </div>
        </div>
      )
      break;
    }

  }
}
const mapStateToProps = (state) =>{
  return{
    posts: state.postsReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    showPopup: (show) => {
      dispatch(showPopup(show))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostFooter)
