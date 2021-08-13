export const reducer =(state,action)=>{
  if(action.type==='ADD_ITEM')
 
  {
     const newItem=[...state.people,action.payload]
    return {...state,people:newItem,isModelOpen:true,modalContent:'item added'}
  }
  if(action.type==='NO_VALUE'){
    return {...state,isModelOpen:true,modalContent:'Please enter a value'}
  }
  if(action.type==='CLOSE_MODAL'){
    return {...state,isModelOpen:false};
  }
  if(action.type==='REMOVE_ITEM'){
    const newPeople =state.people.filter((pers)=>pers.id !==action.payload)
    return {...state,people:newPeople,isModelOpen:true,modalContent:'item Removed'}
  }
  throw new Error("no action matching");
 
}