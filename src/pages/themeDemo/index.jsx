import React, { memo } from 'react'
import { Card, Form, Row, Col, Input, Select, Radio, Switch, Button } from 'antd'

const Option = Select.Option
const adminMaps = [
  { id: 10001, name: '付晓晓' },
  { id: 10002, name: '周毛毛' },
  { id: 10003, name: '郭奉孝' },
  { id: 10004, name: '曹子纯' },
  { id: 10005, name: '荀文若' }
]

function ThemeDemo () {
  return (
    <div style={{ width: '1200px', margin: '0px auto', paddingTop: '24px' }}>
      <Card title='切换主题'>
      <Form>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label='仓库名称'>
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='仓库域名'>
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='仓库管理员'>
              <Select>
                {
                  adminMaps.map((item, i) => (
                    <Option value={item.id} key={item.id}>{item.name}</Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='生效日期'>
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='仓库类型'>
              <Radio.Group>
                <Radio value='private'>私密</Radio>
                <Radio value='public'>公开</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='仓库状态'>
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button>重置</Button>
          <Button type='primary' style={{ marginLeft: '12px' }}>提交</Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  )
}

export default memo(ThemeDemo)
