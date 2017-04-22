import React, {Component} from 'react';

class FilterContainer extends Component{

  constructor(props){
    super(props);
  }

  render(){
    switch(this.props.options){
      case "sortby":
      return(
          <select className="kmprn-dropdown">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
      )
      case "status":
      return(
        <select className="kmprn-dropdown">
          <option value="In-Progress">In-Progress</option>
          <option value="Done">Done</option>
        </select>
      )
    }
  }
}

export default FilterContainer
