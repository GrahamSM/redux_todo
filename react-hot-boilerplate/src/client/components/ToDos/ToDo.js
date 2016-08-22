import React, {Component} from 'react';

import styles from './ToDo.scss'


export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }

  _removeToDo = () =>{
    this.props.removeToDo(this.props.index)
  }

    render(){
      return(
        <div>
          <figure className="todo-item">
            {this.props.text}
            <button onClick={this._removeToDo}>Delete</button>
          </figure>
        </div>
      )
    }
}
