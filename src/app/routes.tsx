import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/home';
import Words from 'containers/words';
import Numbers from 'containers/numbers';

import { getBasePath } from 'utils/helpers';

interface IPage {
  exact?: boolean;
  path: string;
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

const basePath = getBasePath();

const routes: IPage[] = [
  {
    path: `/numbers`,
    component: Numbers,
  },
  {
    path: `/words`,
    component: Words,
  },
  {
    exact: true,
    path: basePath,
    component: Home,
  },
];

export default () => (
  <>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </>
);
