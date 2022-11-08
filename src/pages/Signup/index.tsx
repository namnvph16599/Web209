import React from 'react'
import { Button, Checkbox, Form, Input, Row } from "antd";
import './signup.css';
type Props = {}

const Signup = (props: Props) => {
    return (
        <div className="main-signin">
            <div className="main-signin-content">
                <h2 className="main-signin-content__title-welcome">
                    Welcome To TripFinder
                </h2>
                <h3 className="main-signin-content__title-required">
                    Please Register for your account
                </h3>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name={["user"]}
                        label="Username"
                        rules={[{ type: "text" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["email"]}
                        label="Email"
                        rules={[{ type: "email" }]}
                    >
                        <Input />
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
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                        label="Confirm password"
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

                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>I agree with terms and conditions</Checkbox>
                            </Form.Item>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <div
                    className="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                    role="separator"
                >
                    <span className="ant-divider-inner-text">Or Register Up With</span>
                </div>
                <div className="flex-btn">
                    <div>
                        <Button className="btn-login-or btn-facebook">Facebook</Button>
                    </div>
                    <div>
                        <Button className="btn-login-or btn-github">Github</Button>
                    </div>
                </div>
                <div className="flex-btn">
                    <div>
                        <Button className="btn-login-or btn-firebase">Firebase</Button>
                    </div>
                    <div>
                        <Button className="btn-login-or btn-google">Google+</Button>
                    </div>
                </div>

                <p className="main-signin-content__acount">
                    Already Have an Account!<a href="/signup">Login</a>
                </p>
            </div>
            <div className="main-signin-bg">
                <div className="main-signin-image"></div>
            </div>
        </div>
    );
}

export default Signup