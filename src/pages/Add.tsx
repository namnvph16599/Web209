import React from 'react'
import { Button, Form, Input, notification } from "antd";
import { IProduct } from '../interfaces';
import { useAppDispatch } from '../app/hooks';
import { addProduct } from '../slices/products';
import { useNavigate } from 'react-router-dom';
type Props = {}

const Add = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onFinish = (values: IProduct) => {
        dispatch(addProduct({ ...values }))
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
                    name='name'
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
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button bg-[#2563eb]"
                    >
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Add