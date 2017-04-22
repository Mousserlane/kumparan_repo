import React, {Component} from 'react';

import checkmarkergrey from '../icons/checkmark_grey.png';

import FilterContainer from '../Containers/filtercontainer';


class Filter extends Component{

  render(){
      //Kepadetan, Coba cari better fix
    return(
      <div className="col-md-12">
        <div className="">
          <div className="col-md-1"><img src={checkmarkergrey}/></div>{/*NOTE: Checkmarkernya ganti yg backgroundnya grey*/}
          <div className="col-md-5">
            <div className="col-md-6"><span>SortBy</span></div>
            <div className="col-md-1"><FilterContainer options={"sortby"}/></div>
          </div>
          <div className="col-md-5">
            <div className="col-md-6">Status</div>
            <div className="col-md-1"><FilterContainer options={"status"}/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter
