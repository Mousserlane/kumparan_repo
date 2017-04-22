import React, {Component} from 'react';

import editicon from '../icons/edit_ico.png';
import deleteicon from '../icons/delete_icon.png';

class PopUp extends Component{
  render(){
    if(!this.props.isShown.showpopup)
      return null

    console.log('showpops', this.props.isShown);
    return(
      <div className="col-md-12 pull-right">
        <div id="dropdowndialogue" className="kmprn-dropdown-bubble">
          <div className="row">
            <div className="col-md-7 popupitem" style={{marginLeft:"-3px"}}><span><img src={editicon}/></span>Edit</div>
          </div>
          <div className="row">
            <div className="col-md-7 popupitem"><span><img src={deleteicon}/></span>Delete</div>
          </div>
        </div>
      </div>
    )
  }
}
export default PopUp
