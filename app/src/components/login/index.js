import React, {Component} from 'react'
import Link from 'next'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item
const LoginFormStyle = {}
const LoginFormTitleStyle = {
  'text-align': 'center'
}
const LoginFormForgotStyle = {
  'float': 'right'
}
const LoginFormButtonStyle = {
  'width': '100%'
}
class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="" style={LoginFormForgotStyle}>Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={LoginFormButtonStyle}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
//
// const Login = (props) => (
//   <div className="login">
//     <h1 style={LoginFormTitleStyle}>{props.title || ''}</h1>
//     <WrappedNormalLoginForm title={props.title} />
//   </div>
// )
export default WrappedNormalLoginForm