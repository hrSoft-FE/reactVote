import React, { Component } from 'react'
import { Link } from 'react-router'
import Act from  './list/activityList'
import Admin from '../pages/admin/index/index'
import 'whatwg-fetch'
import 'fetch-ie8/fetch.js'

require('console-polyfill')
require('es6-promise')

import './app.less'
class AppComponent extends Component {
  render () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default AppComponent
