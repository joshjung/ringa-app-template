import React from 'react';

import {Model, Controller} from 'ringa';
import {attach, depend, dependency} from 'react-ringa';

const AppModel = Model.construct('AppModel', [
  {
    name: 'helloWorldText',
    default: 'Hello world!'
  }
]);


class AppController extends Controller {
  constructor() {
    super();

    this.addModel(new AppModel());
  }
}

export default class App extends React.Component {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props);

    attach(this, new AppController());
    depend(this, dependency(AppModel, 'helloWorldText'));
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    const {helloWorldText} = this.state;

    return <h1>
      {helloWorldText}
    </h1>;
  }
}
