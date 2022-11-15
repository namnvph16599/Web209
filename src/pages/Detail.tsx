import React from 'react'
import { Button, Form, Input, notification } from "antd";
type Props = {}

const Detail = (props: Props) => {
    const onFinish = (values: any) => {

    }
    return (
        <div>
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
        </div>
    )
}

export default Detail