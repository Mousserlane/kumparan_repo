import stefavatar from '../icons/avatar_stef.png';
import lianavatar from '../icons/avatar_liana.png';
import jonavatar from '../icons/avatar_jon.png';
import dickavatar from '../icons/avatar_dick.png';

const commentsReducer = (state = {comments:
  [
    {id: 1, postedBy: {name: "Liana Hilda", useravatar:lianavatar}, replyTo: "", postedat:"Senin, 23 Juli 2016 - 13:00", content:"Ini copas dari berita sebelah ya?"},
    {id: 2, postedBy: {name: "Jon Agusta", useravatar:jonavatar}, replyTo: "Liana Hilda", postedat:"Senin, 23 Juli 2016 - 13:00", content:"hahaha judes amat lo, jangan neting"},
    {id: 3, postedBy: {name: "Dicky Saritama", useravatar:dickavatar}, postedat:"Senin, 23 Juli 2016 - 13:00", content:"Auk nih mbak, kasian tuh Stefani, baru latihan nulis"}
  ]
},
  action) =>{
    switch(action.type){
      case "ADD_COMMENT":
      state = {
        ...state,
        comments:[...state.comments, action.payload],
      }
    }
    return state;
  }

export default commentsReducer
