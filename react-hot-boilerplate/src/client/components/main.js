import React from 'react';
import { Link } from 'react-router';

import styles from './main.scss'

const Main = React.createClass({
  render(){
    return (
      <div>
        <h1 className='title-header'>to-do list</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
