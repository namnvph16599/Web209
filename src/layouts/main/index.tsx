import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import { Outlet } from 'react-router-dom'
import SiderMain from './SiderMain';
import HeaderMain from './HeaderMain';

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <SiderMain />
            </Sider>
            <Layout>
                <Header>
                    <HeaderMain />
                </Header>
                <Content className='p-6 bg-[#031b31] h-full'><Outlet /></Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout