import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import AppComponent from './components/app'
import DemoContainer from './containers/demo.container'
import AdminPage from './pages/admin'
import VoteRes from './pages/admin/voteRes'
import ScoreRes from './pages/admin/scoreRes'
const RouterApp = (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      {/*<IndexRoute component={}/>*/}
      <Route path="demo" component={DemoContainer} />
      <Route path="admin" components={AdminPage} />
      <Route path="vote-res" components={VoteRes} />
      <Route path="score-res" components={ScoreRes} />
    </Route>

  </Router>
)

export default RouterApp