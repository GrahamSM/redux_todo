// a reducer takes in two things:

// 1. The action (info about what happened)

// 2. A copy of the current state

//Default parameter for state is an empty array!
function todos(state = [], action){
  debugger;
  switch(action.type){
    case 'ADD_TODO' :
    default:
      return state;
  }
  return state
}
// We write a switch statement under each reducer to identify component related actions, and react
// accordingly!


export default todos;
