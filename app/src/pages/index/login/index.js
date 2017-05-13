import React, { Component } from 'react'
import './index.less'
import Header from '../../../components/content/header/index'
import Footer from '../../../components/content/footer/index'
import Login from '../../../components/user/login/index'
import Logo from '../../../components/content/logo/index'

const title = '登录'
class UserPages extends Component {
  render () {
    return (
      <div className="login-page-wrapper">
        <Header />
        {/*<Logo />*/}
        {this.props.children}
        {/*<div className="login-wrapper">*/}
        {/*<Login title={title} className="login" />*/}
        {/*</div>*/}
        <Footer />
      </div>
    )
  }
}
export default UserPages

