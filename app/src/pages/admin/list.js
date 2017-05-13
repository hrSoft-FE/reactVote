import React from 'react'
import Link from 'next/link'
import { Col, Row, Button } from 'antd'
import Filter from '../../../react-redux-simple-boilerplate/app/src/components/filter'
import ActList from '../../../react-redux-simple-boilerplate/app/src/components/activityList'
const ListStyle = {
  // background: 'rgb(240,20,20)',
  textAlign: 'center',
  marginTop: '20px'
}
const MarginStyle = {
  marginTop: '20px'
}
const ButtonStyle = {
  float: 'right'
}
export default () => (
  <div>
    <Row>
      <Col span={22} offset={1} style={MarginStyle}>
        <Filter />
      </Col>
      <Col span={22} offset={1} style={ListStyle}>
        <Link href="/admin/create">
          <Button style={ButtonStyle}>+创建活动</Button>
        </Link>
      </Col>
      <Col span={22} offset={1} style={ListStyle}>
        <ActList />
      </Col>
    </Row>
  </div>
)