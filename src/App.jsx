import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home/HomePage'
import Portfolio from './pages/portfolio'

export default () => (
  <Switch>
    <main className="main_app">
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </main>
    <Route path="*" component={() => <h1>404 Page Not Found!</h1>} />
  </Switch>
)
