import React, {Component} from "react";
import attachicon from '../icons/attach_icon.png';
import stefavatar from '../icons/avatar_stef.png';
import stefavatargrey from '../icons/stef_avatar_grey.png';

class AddComment extends Component{
  constructor(props){
    super(props)
    console.log('props addcomment?', this.props);
  }

  createComment(e){

    e.preventDefault();

    var comment = {
      id: Math.random(),
      postedBy: {name: "Stefani Aulia", useravatar:stefavatar},
      replyTo: "Liana Hilda",
      postedat:"Senin, 23 Juli 2016 - 13:00",
      content: this.refs.theComment.value
    };

    if(comment.content.length > 0){
      this.props.add(comment)
    }
    this.refs.commentForm.reset();

  }
  render(){
    return(
      <form ref="commentForm" onSubmit={this.createComment.bind(this)}>
      <div className="col-md-12 kmprn-comment-form">
        <div className="col-md-1">
          <img src={stefavatargrey} style={{marginTop:"-5px"}}/>
        </div>
        <div className="col-md-7"><input type="text" placeholder="Write your comment here" ref="theComment"/></div>
        <div className="col-md-1"><img src={attachicon}/></div>
        <div className="col-md-3">
          <button className="btn btn-md btn-block kmprn-btn kmprn-btn-color"
            type="submit">
            Send
          </button>
        </div>
      </div>
      </form>
    )
  }

}

export default AddComment
