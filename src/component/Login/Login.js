import React, { useState } from "react";
import fire from "../../config/Fire";
import "./Login.css";
import { Form, Input, Button, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    type: "",
    message: "",
  });

  const handleChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
   await  fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        window.location.reload()
      })
      .catch((err) => {
        setIsError({ type: "error", message: err.message });
      });
    
  };
  const handleRegister =async () => {
    await fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        window.location.reload()
      })
      .catch((err) => {
        setIsError({ type: "error", message: err.message });
      });
  };
  return (
    <div className="container">
      <Typography.Title level={3}>Login Form</Typography.Title>
      <Form>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePass}
          />
        </Form.Item>
        {/* //not linked yet */}
        <Form.Item hidden>
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item className='buttongrp'>
          <Button 
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleSubmit}
            
          >
            Log in
          </Button>
          <Button style={{margin:10}}type="ghost" onClick={handleRegister}>
            register now!
          </Button>
        </Form.Item>
      </Form>
      {isError ? <Alert style={{position:'fixed',width:200}} message={isError.message} type={isError.type} /> : ""}
    </div>
  );
}
