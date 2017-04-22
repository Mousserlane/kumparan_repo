import React, {Component} from 'react';

import {addPost} from '../Actions/postAction';
import {showPopup} from '../Actions/interactionAction';
import {connect} from 'react-redux';

import SearchBar from '../Containers/searchbarcontainer';
import PostContainer from '../Containers/postcontainer';

import Filter from './filter';
import PopUp from './popupmenu';

class MainBoard extends Component{
  constructor(props){
    super(props)
    console.log('mainboard prop', this.props);
    this.state={
      showpopupmenu : false
    }
  }

  addnewpost = () =>{
    console.log('masuk');

    var newpost = {
      id: Math.random(),
      postedBy: "Stefani Aulia",
      postedat:"Senin, 23 Juli 2016 - 13:00",
      linked: false,
      content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"
    }

    this.props.addPost(newpost)

  }

  render(){
    return(

      <div id="mainboard" className="col-md-8">
        {/*NOTE: HEADER SECTION*/}
        <div className="">
          <SearchBar />
          <div className="col-md-3 pull-right">
            <button className="btn btn-md btn-block kmprn-btn kmprn-btn-clear">Export</button>
          </div>
        </div>
        {/*NOTE: FILTER SECTION*/}
        <div id="filterandAdd">
          <div className="col-md-9 filterparent">
            <Filter />
          </div>
          <div className="col-md-3 pull-right">
            <button className="btn btn-md btn-block kmprn-btn kmprn-btn-color"
              onClick={this.addnewpost}>
              Add Card
            </button>
          </div>
        </div>
        {/*NOTE: CARDS SECTION*/}
        <div className="row">
          <PostContainer />
          <PopUp isShown={this.props.showpopup}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    posts: state.postsReducer,
    showpopup: state.interactionReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addPost: (post) =>{
      dispatch(addPost(post))
    },
    showPopup: (show) =>{
      dispatch(showPopup(show))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBoard)
