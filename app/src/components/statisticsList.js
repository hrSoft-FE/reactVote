import { Table, Icon } from 'antd'
const trunTo = {
  href: 'vote',
  text: '票数统计'

}
const columns = [
  {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left'},
  {title: 'Age', width: 50, dataIndex: 'age', key: 'age', fixed: 'left'},
  {title: '活动开始时间', dataIndex: 'address', key: '1'},
  {title: '活动结束时间', dataIndex: 'address', key: '2'},
  {title: '创建时间', dataIndex: 'address', key: '3'},
  {title: '创建人', dataIndex: 'address', key: '4'},
  {title: '活动状态', dataIndex: 'address', key: '5'},
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
        <a href={`admin/${trunTo.href}`}>{trunTo.text}</a>
    ),
  }
]

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park',
}]
const ActivityList = () => (
  <Table columns={columns} dataSource={data} scroll={{x: 1300}} />
)
export default ActivityList