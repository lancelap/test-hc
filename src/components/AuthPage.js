import React, { useEffect } from 'react';
import { Form, Icon, Button, Input, Row, Col  } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function HorizontalLoginForm(props) {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if(values.username === 'test' && values.password === 'test') {
          props.setAuth('true')
        } 
      }
    });
  };

  useEffect(() => {
    props.form.validateFields();
  }, []);
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <Row style={{height: '100vh'}} type="flex" justify="center" align="middle">
      <Col>
        <Form layout="inline" onSubmit={handleSubmit}>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Log in
          </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );

}

const AuthPage = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default AuthPage;