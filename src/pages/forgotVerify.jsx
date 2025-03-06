import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotVerify = () => {
  let navigate = useNavigate();
  let onFinish = (formValue) => {
    let email = localStorage.getItem("email");
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/verify-user`, {
      code: formValue.code,
      email,
    }).then(res=>
    {
        console.log(res);
        navigate("/forgotPassword")
        
    }
    );
    console.log({ code: formValue.code, email });
  };
  return (
    <div className="relative ">
      <Button className="sticky  top-5 left-5 " onClick={() => navigate(-1)}>
        go back
      </Button>
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
    </div>
  );
};

export default ForgotVerify;
