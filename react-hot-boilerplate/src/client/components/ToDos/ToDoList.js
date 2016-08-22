import React, {Component} from 'react';
import ToDo from './ToDo'
import styles from './ToDoList.scss'


export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {i: 0}
    }

    _todoClick = () =>{
      let text = document.getElementsByClassName('input-todo')[0].value
      this.props.addToDo(text, this.state.i)
      this.setState({i: (this.state.i+1)})
      document.getElementsByClassName('input-todo')[0].value='';
    }

    render(){
      console.log(this.props.todos)
      return(
        <div className='list-body'>
          <ul>
            {this.props.todos.length ?
              this.props.todos.map(todo =>
                !todo.completed ?
                  <ToDo
                    key={todo.index}
                    removeToDo={this.props.removeToDo}
                    {...todo}
                  /> :
                  null
            )
            : null}
          </ul>
          <div className='todo-action-items'>
            <input className="input-todo" name="FirstName"></input>
            <button className="todo-button" onClick={this._todoClick}>Add To-Do</button>
          </div>
        </div>
      )
    }
}
