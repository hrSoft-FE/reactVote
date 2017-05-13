import React from 'react'
import Link from 'next'

const Logo = () => (
  <div className="logo">
    <div className="logo-line"></div>
    <div className="logo-text">不洗碗工作室</div>
    <div className="logo-line"></div>
    <style>{`
      .logo {
            display: flex;
            margin: 28px 20% 24px 20%;
        }

        .logo-line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }

        .logo-text {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
        }

    `}</style>
  </div>
)
export default Logo