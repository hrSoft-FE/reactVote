import { Table, Icon } from 'antd'
const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-item">
        <span>微信</span>
      </div>
      <div className="footer-item">
        <span>手机</span>
      </div>
      <div className="footer-item">
        <span>QQ</span>
      </div>
    </div>
    <style jsx>{`
      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        height: 30px;
        padding: 5px 10px;
        line-height: 20px;
        background-color: rgba(0,0,0,0.2);
        color: #fff;
        font-size: 0
        font-weight: 600
      }
      .footer-item {
        display: inline-block;
        width: 33%;
        font-size: 14px;
        text-align: center;
      }
    `}</style>
  </div>
)
export default Footer