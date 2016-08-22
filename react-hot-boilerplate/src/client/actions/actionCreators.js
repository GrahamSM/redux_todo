//ACTION CREATORS

// increment
export function addToDo(text, index){
  return{
    type: 'ADD_TODO',
    text,
    index
  }
}
