import { Table, Icon } from 'antd'
const Header = () => (
  <div>
    <div className="header">
      <div className="header-back header-item">
        <Icon type="left" />返回
      </div>
      <div className="header-content header-item">投票系统</div>
      <div className="header-more header-item">
        <Icon type="ellipsis" />
      </div>
    </div>
    <style jsx>{`
      .header {
        display: flex;
        box-sizing: border-box;
        height: 50px;
        padding: 5px 10px;
        line-height: 50px;
        background-color: #000;
        color: #fff;
        font-size: 14px;
        font-weight: 600
      }
      .header-item {
        flex: 1
      }
      .header-back {
        text-align: left;
      }
      .header-content {
        text-align: center;
      }
      .header-more {
        text-align: right
      }
    `}</style>
  </div>
)
export default Header