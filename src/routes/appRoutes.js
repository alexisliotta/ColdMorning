import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import News from '../pages/News';
import Principal from '../pages/Principal';
import AboutUs from '../pages/aboutUs';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Principal} exact />
        <Route path="/news" component={News} exact />
        <Route path="/AboutUs" component={AboutUs} exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;