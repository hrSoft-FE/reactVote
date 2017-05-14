import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from '../../components/content/logo/index'

import { Button } from 'antd'
import Header from '../../components/content/header/index'
import Footer from '../../components/content/footer/index'
import Voting from '../../pages/user/voting'
class Index extends Component {
  render () {
    return (
    <div className="user-index">
      <Header />
      {/*<Voting />*/}
      {this.props.children}
      {/*<Logo />*/}
      {/*<Button >*/}
      {/*主页*/}
      {/*</Button>*/}
      {/*<Link to="admin/admin">*/}
      {/*<Button>admin</Button>*/}
      {/*</Link>*/}
      <Footer />
    </div>
    )
  }
}
export default Index