import React from 'react';

import {attach} from 'react-ringa';

import {setup as setupI18N} from '../i18n';

import Header from './Header';
import Footer from './Footer';

import AppController from '../controllers/AppController';

import {DefaultApplicationRoot} from 'ringa-fw-react';

import './ApplicationLayout.scss';

export default class ApplicationLayout extends DefaultApplicationRoot {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props, {
      disableDefaultI18N: false,
      disableScreenController: false
    });

    setupI18N(this.i18NModel);

    attach(this, new AppController());
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return super.render(
      <div className="fill">
        <Header {...this.props} />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>);
  }
}
