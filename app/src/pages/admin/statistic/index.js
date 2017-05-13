import React from 'react'
import { Col, Row, Button } from 'antd'
import Filter from '../../../components/list/filter'
import StaList from '../../../components/list/statisticList'
const updateTime = new Date().getTime()

export default () => (
  <div>
    <Row className="sta-list">
      <Col span={22} offset={1} className="sta-list-item">
        <Filter />
      </Col>
      <Col span={22} offset={1} className="sta-list-item">
        <StaList />
      </Col>
    </Row>
  </div>
)