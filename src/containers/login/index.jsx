import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react'
import {connect} from 'react-redux'
import {loginAsync} from '../../store/action-creators/user'
import './index.less'

@connect(
  state=>({code:state.user.code}),
  {loginAsync}
)
@Form.create()
class Login extends React.Component {
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
     
      
      if (!err) {
        
       const {username,password}=values
       this.props.loginAsync(username,password)
       if(this.props.code===200){
         this.props.history.push('/home')
       }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="headerLogin">欢迎登陆网易云</div>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              { required: true, 
                pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: '请输入正确的邮箱地址' }
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email@163.com"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            点击登陆
          </Button>
         
        </Form.Item>
      </Form>
      </div>
    );
  }
}



export default Login