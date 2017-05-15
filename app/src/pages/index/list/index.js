import React, { Component } from 'react'
import {Row,Col} from 'antd'
import List from '../../../components/list/showList'
import LineText from '../../../components/content/lineText'
import MsgListComponent from '../../../components/content/msgList'
import ShowList from '../../../components/list/showList/index'
import './index.less'
class Item extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div className="show-list-wrapper">
        <div className="msg-bar">
          <MsgListComponent label="手机号" text="15012321234"/>
        </div>
        <div className="show-list">
          <Row>
            <Col span="10" offset={1}>
              <List />
            </Col>
            <Col span="10" offset={2}>
              <List />
            </Col>
          </Row>
          <LineText text="历史投票" />
          <Row>
            <Col span="10" offset={1}>
              <List />
            </Col>
            <Col span="10" offset={2}>
              <List />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Item