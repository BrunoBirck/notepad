const initialState = {
  list: []
} 
 
export default (state = initialState, action:any) => {
  let newList = [ ...state.list ];
  switch(action.type){
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        content: action.payload.content,
        location: action.payload.location
      })
    break;
    case 'EDIT_NOTE':
      if(newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          content: action.payload.content,
          location: action.payload.location
        }
      }
    break;
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index !== action.payload.key)
    break;
  }
  return { ...state, list: newList }
}