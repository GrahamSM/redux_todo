import React, {Component} from 'react';
import ToDo from './ToDo'


export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {i: 0}
    }

    _todoClick = () =>{
      let text = document.getElementsByClassName('text')[0].value
      this.props.addToDo(text, this.state.i)
      this.setState({i: (this.state.i+1)})
    }

    render(){
      console.log(this.props.todos)
      return(
        <div>
        <ul>
          {this.props.todos.length ?
            this.props.todos.map(todo =>
              <ToDo
                key={todo.index}
                {...todo}
              />
          )
          : null}
        </ul>
          <input className="text" name="FirstName"></input>
          <button onClick={this._todoClick}>Add To-Do</button>
        </div>
      )
    }
}
