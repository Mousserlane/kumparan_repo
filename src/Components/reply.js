import React, {Component} from "react";
import datepostedicon from '../icons/date_posted_icon.png';
import PostFooter from './postfooter';

class Reply extends Component{
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.replies);
    return(
      <div className="col-md-12">
        <ul>
          {
              this.props.replies.comments.map(r => {
                console.log('isi RR', r.postedBy.useravatar);
              return (
                <li key={r.id} className="row comment-border comment">
                  {/*Header Section*/}
                  <div className="col-md-7" style={{position:"relative", left:"-48px", top:"-20px"}}>
                    <div className="col-md-2 avatar"><img src={r.postedBy.useravatar}/></div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-12">{r.postedBy.name}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <span><img src={datepostedicon}/></span>
                          <span className="date-text">{r.postedat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*END OF HEADER*/}
                  {/*Content Section*/}
                  <div className="row ">
                    <div className="col-md-12">
                      <div className="col-md-12 kmprn-comment">
                        {r.content}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="postfooter">
                        <PostFooter section="reply"/>
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

export default Reply
