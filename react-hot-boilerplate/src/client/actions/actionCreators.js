//ACTION CREATORS

// increment
export function addToDo(text){
  return{
    type: 'ADD_TODO',
    text
  }
}
