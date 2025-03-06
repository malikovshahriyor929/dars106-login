import { Button, Card, Checkbox, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/auth/sign-up`, values)
      .then((res) => {
        // console.log(res);
        navigate("/verify");
        localStorage.setItem("email", values.email);
      });
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <Card className="w-full max-w-md shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
          <Form
            name="signin"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="first_name"
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input placeholder="First Name" size="large" />
            </Form.Item>

            <Form.Item
              name="last_name"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input placeholder="Last Name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
                size="large"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link to={"/login"} className="text-blue-500">Sign Up</Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignIn;
