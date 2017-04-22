import React, {Component} from  'react';
import {connect} from 'react-redux';

import MainBoard from '../Components/mainboard';
import Posts from '../Components/posts';

import stefavatar from '../icons/avatar_stef.png';

class PostContainer extends Component{
  constructor(){
    super()
    const User = {id: 1, name: "Stefani Aulia", useravatar: stefavatar}
    const PostData = [
      {id: 1, postedat:"Senin, 23 Juli 2016 - 13:00", linked: true, content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"},
      {id: 2, postedat:"Senin, 23 Juli 2016 - 13:00", linked: true, content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"},
      {id: 3, postedat:"Senin, 23 Juli 2016 - 13:00", linked: false, content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"},
    ];

    this.state = {
      user: User,
    }
  }

  render(){
    console.log('state container', this.state);
    return(
      <Posts userData={this.state.user} PostData={this.props.posts} />
    )
  }


}
const mapStateToProps = (state) =>{
  return{
    posts: state.postsReducer,
  }
}

export default connect(mapStateToProps)(PostContainer)
