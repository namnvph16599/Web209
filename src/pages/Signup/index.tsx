import React from 'react'
import { Button, Checkbox, Form, Input, Row } from "antd";
import './signup.css'
import { Link } from 'react-router-dom';
type Props = {}

const Signup = (props: Props) => {
    return (
        <div className="main-signin">
            <div className="main-signin-content">
                <h2 className="main-signin-content__title-welcome">Welcome</h2>
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
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>

                <p className="block text-center text-[#777777] mt-8 font-bold">
                    You have an Account ? <Link to="/login" className="text-[#2563eb] font-bold">Login</Link>
                </p>
            </div>
            <div className="main-signin-bg">
                <div className="main-signin-image"></div>
            </div>
        </div >
    );
}

export default Signup