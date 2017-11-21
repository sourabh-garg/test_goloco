import React from 'react';
import Main from '../components/main';
import HomePage from '../components/Homepage/homepage';

import { Route, IndexRoute } from "react-router";



export default (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>

  </Route>
);


