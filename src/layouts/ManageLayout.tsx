import React from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
type Props = {}

const ManageLayout = (props: Props) => {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content><Outlet /></Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

    )
}

export default ManageLayout