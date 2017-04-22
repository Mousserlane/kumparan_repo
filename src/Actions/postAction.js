export function addPost(post){
  console.log('masuk addpost');
  return{
    type:"ADD_POST",
    payload: post
  }
}
