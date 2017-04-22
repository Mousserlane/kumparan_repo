import React, {Component} from 'react';

import usericon from '../icons/icon_user.png';
import notificon from '../icons/icon_notif_active.png';
import searchicon from '../icons/icon_search.png';

class Header extends Component{
  render(){
    return(

      <div className="row kmprn-header">
        <div id="buttons" className="col-md-8">
          <div className="col-md-4">
            <button className="btn btn-block btn-sm kmprn-btn kmprn-btn-color">Context Processing</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-block btn-sm kmprn-btn kmprn-btn-color">Data Journalism</button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-block btn-sm kmprn-btn kmprn-btn-color">Create Story</button>
          </div>
        </div>
        <div id="icons" className="col-md-4" style={{display:"flex", justifyContent:"flex-end"}}>
          <div className="col-md-2"><img src={usericon} /></div>
          <div id="icon-notif-middle" className="col-md-2"><img src={notificon} /></div>
          <div className="col-md-2"><img src={searchicon} /></div>
        </div>
      </div>

    )
  }
}

export default Header;
