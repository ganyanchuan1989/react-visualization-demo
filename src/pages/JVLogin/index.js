import React from "react";
import "./index.less";
import { Form, Input, Button } from "antd";

export default React.memo(() => {
  return (
    <div className="login-container">
      <div className="login-main-container">
        {/* <img
          src={require("@/assets/bg.png")}
          style={{ width: "100%", objectFit: "contain" }}
        /> */}
        <div className="login-form-container">
          <div className="login-form" >
            <div className="login-logo">
              交通银行业务原型设计平台
            </div>
            <Form>
              <Form.Item>
                <Input style={{height: '45px'}}/>
              </Form.Item>
              <Form.Item>
                <Input style={{height: '45px'}}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" style={{width:'100%', height: '45px'}}>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
});
