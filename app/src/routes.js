import React from 'react';
import { Route } from 'react-router';

import ApplicationLayout from './layout/ApplicationLayout';
import Home from './Home';

export default (
  <Route path="/">
    <ApplicationLayout>
      <Route path="/" component={Home} />
    </ApplicationLayout>
  </Route>
);
