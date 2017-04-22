import React, {Component} from  'react';
import {connect} from 'react-redux';

import MainBoard from '../Components/mainboard';
import Posts from '../Components/posts';

import stefavatar from '../icons/avatar_stef.png';
import lianavatar from '../icons/avatar_liana.png';
import jonavatar from '../icons/avatar_jon.png';
import dickavatar from '../icons/avatar_dick.png';

import {addComment} from '../Actions/commentsAction';

class UserContainer extends Component{
  constructor(){
    super()

    const Users = [
      {id: 1, username: "Stefani Aulia", useravatar: stefavatar},
      {id: 2, username: "Liana Hilda", useravatar: lianavatar},
      {id: 3, username: "Jon Agusta", useravatar: jonavatar},
      {id: 4, username: "Dicky Saritama", useravatar: dickavatar},
    ];
  }
  render(){
    return(
      <div></div>
    )
  }
}

export default UserContainer
