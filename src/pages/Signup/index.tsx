import React, { useEffect } from 'react'
import { Button, Form, Input, notification } from "antd";
import './signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { refreshError, registerAsync } from '../../slices/auth';
import { IAuthRegister, NotificationType } from '../../interfaces/auth'
type Props = {}

const registerFailed = (description: string) => {
    notification.error({
        message: 'Register failed!',
        description,
    });
};

const Signup = (props: Props) => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.auth.error)
    const message = useAppSelector(state => state.auth.message)
    const logged = useAppSelector(state => state.auth.user.logged)
    const navigate = useNavigate();
    useEffect(() => {
        if (error && message) {
            registerFailed(message)
            dispatch(refreshError())
            return
        }
    }, [error, message])
    useEffect(() => {
        if (logged) {
            navigate('/')
        }
    }, [logged])

    const onFinish = (values: IAuthRegister) => {
        dispatch(registerAsync({ ...values, role: 0 }))
    }
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
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='displayName'
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your name!",
                            },
                        ]}
                    >
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        name='email'
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