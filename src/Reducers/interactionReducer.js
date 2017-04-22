const interactionReducer = (state = {showmodal: false,
  showpopup:false},
  action) => {
  switch(action.type){
    case "SHOW_REPLY":
    state = {
      ...state,
      isHidden: action.payload
    }
    break;
    case "SHOW_MODAL":
    state={
      ...state,
      showmodal: action.payload
    }
    break;
    case "SHOW_POPUP":
    state={
      ...state,
      showpopup: action.payload
    }
  }
  return state;
}
export default interactionReducer
