import React from 'react';

import {browserHistory} from 'react-router';
import {attach} from 'react-ringa';

import {setup as setupI18N} from '../i18n';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';

import AppController from '../controllers/AppController';

import {TooltipContainer,
        OverlayContainer,
        Theme,
        DebugInspector,
        DefaultApplicationRoot,
        ModalContainer} from 'ringa-fw-react';

import './ApplicationLayout.scss';

export default class ApplicationLayout extends DefaultApplicationRoot {
  //-----------------------------------
  // Constructor
  //-----------------------------------
  constructor(props) {
    super(props, {
      browserHistory
    });

    setupI18N(this.i18NModel);

    attach(this, new AppController());
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return <Body>
      <Theme classes="fill">
        <div className="fill">
          <OverlayContainer global={true} classes={{fill: true}}>
            <ModalContainer classes="fill no-scroll">
              <Header {...this.props} />
              <div className="container">
                {this.props.children}
              </div>
              <Footer />
              <DebugInspector />
            </ModalContainer>
          </OverlayContainer>
          <TooltipContainer />
        </div>
      </Theme>
    </Body>;
  }
}
