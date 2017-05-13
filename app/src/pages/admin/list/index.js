import React from 'react'
import { Col, Row, Button } from 'antd'
import Filter from '../../../components/list/filter/index'
import ActList from '../../../components/list/activityList/index'

export default () => (
  <div>
    <Row className="admin-list">
      <Col span={22} offset={1} >
        <Filter />
      </Col>
      <Col span={22} offset={1} className="admin-list-item">
        {/*<Link href="/admin/create">*/}
          <Button className="admin-list-button">+创建活动</Button>
        {/*</Link>*/}
      </Col>
      <Col span={22} offset={1} className="admin-list-item">
        <ActList />
      </Col>
    </Row>
  </div>
)