import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Portfolio from './pages/portfolio'

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="*" component={() => <h1>404 Page Not Found!</h1>} />
  </Switch>
)
