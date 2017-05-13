import Link from 'next/link'
import React from 'react'
/**
 *TODO: 使用next提供的路由组件的写法老失效，所以替换了a tag
 */
import Logo from '../../react-redux-simple-boilerplate/app/src/components/logo'

import { Button } from 'antd'
import Header from '../../react-redux-simple-boilerplate/app/src/components/header'
import Footer from '../../react-redux-simple-boilerplate/app/src/components/footer'
const Index = () => (
  <div>
    <Header/>
    <Logo/>
    <Button >
      主页
    </Button>
    <a href="/admin">
      <Button>admin</Button>
    </a>
    <Footer/>
    <style jsx>{`

    `}</style>
  </div>
)
export  default Index