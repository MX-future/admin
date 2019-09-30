import React,{ Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { LoginWrapper, PageWrapper } from './style';
import { actionCreators } from './store/index';
import md5 from 'md5';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                let loginName = values.username;
                let loginPwd = md5(values.password);
                this.props.handleLogin(loginName, loginPwd);

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        //通过判断是否登录决定是否跳转
        if(this.props.isLogin){
            return <Redirect to='/admin' />
        }else{
            return (
                <PageWrapper>

                    <LoginWrapper>
                        <h1>MX巴赫</h1>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
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
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginWrapper>
                </PageWrapper>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.getIn(['login','isLogin'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin(adminName,password){
            dispatch(actionCreators.AdminLogin(adminName,password));
        }
    }
}
const LoginForm = Form.create()(Login);

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);