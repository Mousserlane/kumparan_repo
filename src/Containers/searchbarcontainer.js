import React, {Component} from 'react';

import searchicon from '../icons/icon_search.png';

class SearchBar extends Component{

  render(){
    return(
      <div className="col-md-5 searchbar">

          <div className="col-md-1"><img src={searchicon}/></div>
          <div className="col-md-5"><input type="text" className="searchbar-transparent"/></div>

      </div>
    )
  }

}

export default SearchBar;
