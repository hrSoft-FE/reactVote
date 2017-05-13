import React from 'react'
import Link from 'next'
import Header from '../../react-redux-simple-boilerplate/app/src/components/header'
import Footer from '../../react-redux-simple-boilerplate/app/src/components/footer'
import Login from '../../react-redux-simple-boilerplate/app/src/components/login'
import Logo from '../../react-redux-simple-boilerplate/app/src/components/logo'
const LoginStyle = {}
const LoginWrapperStyle = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'height': '80vh',
}
const LoginPageWrapperStyle = {
  'height': '100vh',
}
const title = '登录'
export default () => (
  <div className="login-page-wrapper" style={LoginPageWrapperStyle}>
    <Header />
    {/*<Logo />*/}
    <div className="login-wrapper" style={LoginWrapperStyle}>
      <Login title={title} style={LoginStyle} className="login" />
    </div>
    <Footer />
    <style>{`
      .login {
        padding: 1rem;
        border-radius: 0.2rem;
      }
    `}</style>
  </div>
)