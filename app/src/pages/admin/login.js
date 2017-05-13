import React from 'react'
import Link from 'next'
import Login from '../../../react-redux-simple-boilerplate/app/src/components/login'
const LoginStyle = {

}
const LoginWrapperStyle = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'height':'500px',
}
const title = '登录'
export default () => (
  <div className="login-wrapper" style={LoginWrapperStyle}>
    <Login title={title} style={LoginStyle} className="login" />
    <style>{`
      .login {
        max-width: 300px;
        box-shadow: 0 0 100px rgba(0,0,0,.08);
        padding: 36px;
        border-radius: 5px;
      }
    `}</style>
  </div>
)