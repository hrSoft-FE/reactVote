import React from 'react'
import { Col, Row, Button } from 'antd'
import Filter from '../../../../react-redux-simple-boilerplate/app/src/components/filter'
import StaList from '../../../../react-redux-simple-boilerplate/app/src/components/statisticsList'
const updateTime = new Date().getTime()
const ListStyle = {
  // background: 'rgb(240,20,20)',
  textAlign: 'center',
  marginTop: '3vw',
  minWidth: '1000px'
}
const MarginStyle = {
  marginTop: '3vw'
}
const ButtonStyle = {
  float: 'right'
}
const TitleStyle = {
  color: "#333"
}
export default () => (
  <div>
    <Row>
      <Col span={22} offset={1} style={MarginStyle}>
        <Filter />
      </Col>
      <Col span={22} offset={1} style={ListStyle}>
        <StaList />
      </Col>
    </Row>
  </div>
)