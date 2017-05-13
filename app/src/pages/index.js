import React from 'react'
/**
 *TODO: 使用next提供的路由组件的写法老失效，所以替换了a tag
 */
import Logo from '../components/content/logo'

import { Button } from 'antd'
import Header from '../components/header'
import Footer from '../components/content/footer'
const Index = () => (
  <div>
    <Header />
    <Logo />
    <Button >
      主页
    </Button>
    <a href="/admin">
      <Button>admin</Button>
    </a>
    <Footer />
  </div>
)
export default Index