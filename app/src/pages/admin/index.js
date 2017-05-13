import React from 'react'
import { Tabs } from 'antd'
import List from './list/index'
import Statistic from './statistic/index'

const TabPane = Tabs.TabPane

const MarginStyle = {
  marginTop: '3vw'
}

export default () => (
  <div>
    <Tabs tabPosition='left' style={MarginStyle}>
      <TabPane tab="活动列表页" key="1"><List /></TabPane>
      <TabPane tab="投票统计页" key="2"><Statistic /></TabPane>
    </Tabs>
  </div>
)