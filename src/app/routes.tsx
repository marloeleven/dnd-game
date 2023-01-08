import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Home from 'containers/home';
import Words from 'containers/words';
import Numbers from 'containers/numbers';

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/numbers">
        <Numbers />
      </Route>
      <Route path="/words">
        <Words />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </HashRouter>
);
