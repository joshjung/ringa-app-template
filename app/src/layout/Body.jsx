import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import './Body.scss';

class Body extends Component {
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const {classes = ''} = this.props;

    return (
      <BodyClassName className={ classes }>
        { this.props.children }
      </BodyClassName>
    );
  }
}

export default Body;
