import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/auth/verify`, {
        email: localStorage.getItem("email"),
        code: values.code,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token), navigate("/");
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Form name="verify" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="code"
          rules={[
            {
              required: true,
              len: 6,
              message: "Please enter a valid 6-digit code!",
            },
          ]}
        >
          <Input.OTP
            className="text-center tracking-widest"
            placeholder="123456"
            maxLength={6}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            size="large"
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Verify;
