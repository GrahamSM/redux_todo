import React from 'react';

const ToDo = React.createClass({
  render(){
    debugger;
    return(
      <div>
        <button onClick={this.props.addToDo.bind(null, 'hello')}>Add To-Do</button>
      </div>
    )
  }
});

export default ToDo;

// TODO: Why do we have to use bind null?
