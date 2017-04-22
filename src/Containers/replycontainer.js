import React, {Component} from 'react';
import {addComment} from '../Actions/commentsAction';
import {connect} from 'react-redux';

import Reply from '../Components/reply';
import AddComment from '../Components/addcommentform';

import stefavatar from '../icons/avatar_stef.png';
import lianavatar from '../icons/avatar_liana.png';
import jonavatar from '../icons/avatar_jon.png';
import dickavatar from '../icons/avatar_dick.png';

class ReplyContainer extends Component{
  constructor(props){
    super(props);
    console.log("replycontainer",this.props);

    const Users = [
      {id: 1, username: "Stefani Aulia", useravatar: stefavatar},
      {id: 2, username: "Liana Hilda", useravatar: lianavatar},
      {id: 3, username: "Jon Agusta", useravatar: jonavatar},
      {id: 4, username: "Dicky Saritama", useravatar: dickavatar},
    ]

    this.state ={
      users: Users,
    }
  }

  render(){
    var ishidden = this.props.showreply ? "-show" : ""
    return(
      <div>
          <Reply replies = {this.props.comment}/>
          <AddComment add={this.props.addComment} user={this.state.users[0]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    comment: state.commentsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addComment: (comment) =>{
      dispatch(addComment(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyContainer)
