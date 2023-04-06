import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from 'antd'

import SideMenu from '../../components/SideMenu'
import Loading from '../../components/Loading'

import './index.less';

const Setting = lazy(() => import('../Setting'))
const View    = lazy(() => import('../View'))

const { Content } = Layout;

export default function Home(props) {
  
  useEffect( () => {

    // 判断是否登录
    const isLogin = localStorage.getItem('isLogin')
    // 未登录跳转至登录页
    if( isLogin != 'true' ) props.history.push('/login')

  },[])

  return (
    <Layout className="main">
      <SideMenu />
      <Content className="content">
        <Suspense fallback={ <Loading /> }>
          <Routes>
            <Route path="/home/setting" component={Setting} />
            <Route path="/home/view/:name" component={View} />
            <Route path="/" element={<Navigate to="/home/setting" />} />
          </Routes>
        </Suspense>
      </Content>
    </Layout>
  );
}
