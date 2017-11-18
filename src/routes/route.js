import React from 'react';
import Main from '../components/main';
import HomePage from '../components/Homepage/homepage';

import { Route, IndexRoute } from "react-router";



module.exports = (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>

  </Route>
);


