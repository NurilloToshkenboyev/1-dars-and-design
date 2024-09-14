import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { data } from './layout-data';
import { Link, Outlet } from 'react-router-dom';
import { Logo } from '../assets/logo';
import './style.css'
const { Header, Content, Footer, Sider } = Layout;
const {borderRadiusLG} = '5px'

const items2 = data.map(({children, key, icon, label}) => {
    return{
        key,
        label,
        icon: React.createElement(icon),
        children: children.map((child) => {
            return{
                key: child.key,
                label: <Link to={child.path}>{child.label}</Link>
            }
        })
    }
})
export const MainLayout = () => {
   
      return (
        <Layout >
          <Header 
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'white',
              boxShadow: '0 2px 10px 1px gray',
              justifyContent: 'space-between'
            }}
            
          >
           <Logo/>
            <Button className='header__button' >Каталог</Button>
          </Header>
          <Content
            style={{
                padding: '0 48px',
            
            }}
            >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
              style={{
                width: '1420px',
                padding: '24px 0',
                borderRadius: borderRadiusLG,
               
              }}
            >
              <Sider
                style={{
                }}
                width={200}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{
                    height: '100%',
                  }}
                  items={items2}
                />
              </Sider>
              <Content
                style={{
                  padding: '0 24px',
                  minHeight: 280,
                }}
              >
                <Outlet/>
              </Content>
            </Layout>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
  );
};