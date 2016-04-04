import _ from 'lodash';

const changeBox = (state = [], action) =>{
  switch (action.type){
    case 'INCREMENT':
     _.each(state, (box) => {
       if(action.boxId === box.id){
         console.log('found the right box');
       }
     })
      return
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default changeBox;