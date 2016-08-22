// a reducer takes in two things:

// 1. The action (info about what happened)

// 2. A copy of the current state

const defaultState = {
 todos: null
};

function todo(state={}, action){
  switch(action.type){
    case 'ADD_TODO' :
      return {
        text: action.text,
        index: action.index
      }
    default:
      return state
  }
}

function todos(state = defaultState, action){
  switch(action.type){
    case 'ADD_TODO' :
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state;
  }
  return state
}


export default todos;
