/**
 * Created by Pororo on 17/5/14.
 */

import React, { Component } from 'react'
import { Tag, Col, Row, Radio, Checkbox, InputNumber } from 'antd'
const RadioGroup = Radio.Group

import FooterButton from './footerbutton'
const MarginStyle = {
  marginTop: '5vw',
  fontSize: '2vw'
}

function getLocalTime (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年 | 月/g, '-').replace(/日/g, ' ')
}

class Voting extends Component {
  state = {
    value: 1,
    type: 2,
    StartTime: getLocalTime(1494583700),
    EndTime: getLocalTime(1494583718)
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }
  onDoubleChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }

  render () {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    const GlobalOffsetSpan = {
      offset: 3,
      span: 18
    }
    const Single = (
      <Row style={MarginStyle}>
        <Col {...GlobalOffsetSpan}>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Row style={MarginStyle}>
              <Col>
                <h3>选项1</h3>
              </Col>
              <Col>
                <Radio style={radioStyle} value={1}>Option A</Radio>
              </Col>
            </Row>
          </RadioGroup>
        </Col>
      </Row>
    )

    const Double = (
      <Row style={MarginStyle}>
        <Checkbox.Group onChange={this.onDoubleChange}>
          <Col {...GlobalOffsetSpan} style={MarginStyle}>
            <Col>
              <h3>选项1</h3>
            </Col>
            <Col style={MarginStyle}>
              <Checkbox value="A">A</Checkbox>
            </Col>
          </Col>
        </Checkbox.Group>
      </Row>
    )

    const Score = (
      <Row style={MarginStyle}>
        <Col {...GlobalOffsetSpan}>
          <Row style={MarginStyle}>
            <Col>
              <h3>选项1</h3>
            </Col>
            <Row>
              <Col span={18} style={MarginStyle}>
                <h4>XXXXXXXXXXXXXXXX</h4>
              </Col>
              <Col span={4}>
                <InputNumber />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    )
    return (
      <div>
          <Row style={MarginStyle}>
            <Col {...GlobalOffsetSpan}>
              <h2>投票应用</h2>
            </Col>
          </Row>
          <Row style={MarginStyle}>
            <Col {...GlobalOffsetSpan}>
              <Tag color="#f50">已结束</Tag>
              <Tag>未开始</Tag>
              <Tag color="#87d068">进行中</Tag>
            </Col>
          </Row>
          <Row style={MarginStyle}>
            <Col {...GlobalOffsetSpan}>
              <h4>投票时间:</h4>
            </Col>
          </Row>
          <Row style={MarginStyle}>
            <Col {...GlobalOffsetSpan}>
              <h4 style={{margin: 0}}>{this.state.StartTime} &nbsp; 到 &nbsp; {this.state.EndTime}</h4>
            </Col>
          </Row>
          <div style={{marginTop: '-3vw'}}>
            { this.state.type === 1 ? Single : (this.state.type === 2 ? Double : Score)}
          </div>
          <FooterButton />
      </div>
    )
  }
}

export default Voting