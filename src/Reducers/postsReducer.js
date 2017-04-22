const postsReducer = (state = {posts:
  [
    {id: 1, postedBy: "Stefani Aulia", postedat:"Senin, 23 Juli 2016 - 13:00", linked: true, content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"}
  ]
  }, action) => {
    switch(action.type){
      case "ADD_POST":
      state = {
        ...state,
        posts:[...state.posts, action.payload]
      }
    }
    return state;
  }

  export default postsReducer
