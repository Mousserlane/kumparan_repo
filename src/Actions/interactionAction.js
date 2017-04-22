export function showReply(ishidden){
  return{
    type: "SHOW_REPLY",
    payload: ishidden
  }
}
export function showModal(showmodal){
  console.log('masuk showmodal');
  return{
    type: "SHOW_MODAL",
    payload: showmodal
  }
}
export function showPopup(showpopup){
  console.log('masuk popup');
  return{
    type: "SHOW_POPUP",
    payload: showpopup
  }
}
