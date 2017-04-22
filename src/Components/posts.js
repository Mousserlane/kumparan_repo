import React, {Component} from 'react';

import LinkTaskContainer from '../Containers/linktaskcontainer';

import checkmarker from '../icons/check_marker.png';
import datepostedicon from '../icons/date_posted_icon.png';

import ReplyContainer from '../Containers/replycontainer';
import PostFooter from './postfooter';

class Posts extends Component{
  constructor(props){
    super(props);
    console.log('posts data', this.props);

    this.state={
      showmore: false,
      showreply: false
    }
  }

  expandMenu = (expanded, id) => {
    console.log('masuk expandMenu', id, expanded);
    this.setState({showmore: expanded}, ()=>{
      console.log('showmore', this.state.showmore)
      if(!expanded){
        console.log('in');
        document.getElementById("post_"+id).style.height = "60px";
      }
      else{
        document.getElementById("post_"+ id).style.height = "auto";
        }
    })
  }
  expandReply = (expandedreply, id) => {
    this.setState({showreply:expandedreply}, ()=>{
      if(!expandedreply){
        document.getElementById("reply_"+id).style.display = "none"
      }
      else{
        document.getElementById("reply_"+id).style.display = "block"
      }
    })
  }

  render(){

    const avatar_stef = this.props.userData.useravatar;
    var cutpost = this.state.showmore ? "" : " cutpost";

    return(
      <div className="col-md-12 postparent">
        <ul>
        {
          this.props.PostData.posts.map((p) => {
            console.log('pdata', p);
            return(
              <li key={p.id}>
                <div id="postbox" className="kmprn-task-box no-overflow">
                  {/*NOTE: HEADER SECTION*/}
                  <div id="header" className="row">
                  <div className="col-md-1" style={{position:"relative", top:"6px"}}><img src={checkmarker} /></div>
                  {/*NOTE: USER SECTION*/}
                  <div className="col-md-5" style={{position:"relative", left:"-35px"}}>
                    <div className="col-md-3"><img src={avatar_stef}/></div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-12">{p.postedBy}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <span><img src={datepostedicon}/></span>
                          <span className="date-text">{p.postedat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*NOTE: END OF USER SECTION NOTE*/}
                  <div className="col-md-4 pull-right">
                    <LinkTaskContainer expandPost={this.expandMenu.bind(this)} contentid = {p.id}/>
                  </div>
                </div>
                  {/*NOTE: END OF HEADER SECTION* NOTE/}
                  {/*NOTE: CONTENT SECTION NOTE*/}
                  <div id="content" className="row">
                    <div className="col-md-12">
                    <div ref="id" id={"post_"+p.id} className={"col-md-12 kmprn-post"}>
                      {p.content}
                    </div>
                  </div>
                  </div>
                  <div id="footer" className="row">
                    <div className="col-md-12">
                    <div className="postfooter">
                      <PostFooter expandreply={this.expandReply.bind(this)} section="post" id={p.id}/>
                      <div id={"reply_" + p.id} className={"col-md-12 kmprn-reply"}>
                        <ReplyContainer showreply={this.state.showreply}/>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </li>
            )
          })

        }
        </ul>
      </div>
    )
  }
}

export default Posts
