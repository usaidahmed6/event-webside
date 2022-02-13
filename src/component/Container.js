import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import '../screens/home.css'
import { signOut, auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function Conatiner({ children, }) {
    const [color, setColor] = useState('red')
    const navigate = useNavigate()

    const onClickLogout = () => {
        signOut(auth).then(() => navigate('/login'))
    }

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                    <Link to={'/'}>
                        <Menu.Item key="1">All Events</Menu.Item>
                    </Link>
                    <Link to={'/myEvents'}>
                        <Menu.Item key="2">My Events</Menu.Item>
                    </Link>

                    <Link to={'/add'}>
                        <Menu.Item key="3">Add Event</Menu.Item>
                    </Link>
                     <Menu.Item onClick={onClickLogout} key="4">Logout</Menu.Item>

                </Menu>

            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <marquee direction="left" class="marquee" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">
                    Welcome a new employee to your company, it’s important to compose a message that makes them feel like part of the team right away. A welcome message can be brief and friendly, or one that contains important information and runs a bit longer. No matter what kind of message you send, you want your new employee to form a great first impression of their new workplace. In this article, we explain how to write a positive welcome message for a new employee.
                </marquee>
            </Footer>
        </Layout>
    )
}

export default Conatiner