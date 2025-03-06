import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let loginFn = (e) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/auth/sign-in`, { ...e })
      .then((res) => {
        navigate("/");
      });
    // console.log(e);
  };
  return (
    <div className="mx-auto flex justify-center items-center !w-[500px] p-10  ">
      <Form onFinish={loginFn} className="!w-[500px]">
        <Form.Item name="email">
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="password" />
        </Form.Item>
        <div className=" flex items-center justify-between mb-5">
          <Link to={"/forgotEmailCheck"}>Forgot pasword</Link>
          <Link to={"/register"}>i don't have account</Link>
        </div>
        <Button htmlType="submit">log in</Button>
      </Form>
    </div>
  );
};

export default Login;
