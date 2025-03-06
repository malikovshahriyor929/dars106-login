import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotEmailCheck = () => {
  let navigate = useNavigate();
  let emailCheck = (formValue) => {
    console.log(formValue);
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/auth/verify-email`, formValue)
      .then((res) => {
        localStorage.setItem("email", formValue.email);
        navigate("/forgotVerify");
      });
  };

  return (
    <div className="relative  ">
      <Button className="sticky  top-5 left-5 " onClick={() => navigate(-1)}>
        go back
      </Button>
      <div className="mx-auto flex justify-center items-center  mt-10 !w-[500px] p-10">
        <Form onFinish={emailCheck} className="!w-[500px]">
          <Form.Item name="email" className="!w-full">
            <Input placeholder="enter your email!" />
          </Form.Item>
          <Button htmlType="submit">Check Email</Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgotEmailCheck;
