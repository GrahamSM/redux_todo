import React, {Component} from 'react';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    _todoClick = () =>{
      let text = document.getElementsByClassName('text')[0].value
      this.props.addToDo(text)
    }
    render(){
      return(
        <div>
          <input className="text" name="FirstName"></input>
          <button onClick={this._todoClick}>Add To-Do</button>
        </div>
      )
    }
}

// TODO: Why do we have to use bind null?
