import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  let navigate = useNavigate();
  let new_password = (formValue) => {
    let email = localStorage.getItem("email");
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/change-forgot-password`,
        { new_password: formValue.new_password, email }
      )
      .then((res) => {
        console.log(res);
        navigate("/login");
      });
    console.log({ new_password: formValue.new_password, email });
  };

  return (
    <div className="relative  ">
      <Button className="sticky  top-5 left-5 " onClick={() => navigate(-1)}>
        go back
      </Button>
      <div className="mx-auto flex justify-center items-center  mt-10 !w-[500px] p-10">
        <Form onFinish={new_password} className="!w-[500px]">
          <Form.Item name="new_password" className="!w-full">
            <Input placeholder="enter your new password!" />
          </Form.Item>
          <Button htmlType="submit">new password</Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
