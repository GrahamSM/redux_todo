import React, {Component} from 'react';

import styles from './ToDo.scss'


export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
      return(
        <div>
          <figure className="todo-item">
            {this.props.text}
          </figure>
        </div>
      )
    }
}
