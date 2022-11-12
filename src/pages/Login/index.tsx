import React from 'react'
import { Button, Checkbox, Form, Input, Row } from "antd";
import './login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from 'react-router-dom';
type Props = {}
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // callbacks: {
    //     // Avoid redirects after sign-in.
    //     signInSuccessWithAuthResult: () => false,
    // },
};
const Login = (props: Props) => {
    return (
        <div className="main-signin">
            <div className="main-signin-content">
                {/* <Logo color={"#008489"} /> */}
                <h2 className="main-signin-content__title-welcome">Welcome Back</h2>
                <h3 className="main-signin-content__title-required">
                    Please log into your account
                </h3>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    layout={'vertical'}
                >
                    <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                        label="Password"
                    >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="text-[#2563eb] font-bold" href="">
                                Forgot password
                            </a>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button bg-[#2563eb]"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <div
                    className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                    role="separator"
                >
                    <span className="ant-divider-inner-text">Or log in with </span>
                </div>
                <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

                <p className="block text-center text-[#777777] mt-8 font-bold">
                    Don't Have an Account ? <Link to="/signup" className="text-[#2563eb] font-bold">Registration</Link>
                </p>
            </div>
            <div className="main-signin-bg">
                <div className="main-signin-image"></div>
            </div>
        </div >
    );
}

export default Login