import React, { useEffect, useState } from "react";

import axios from "axios";

import { Form, Input, Button, Drawer, Typography, notification } from "antd";
import { data } from "react-router-dom";
import ImageUpload from "./imgUpload";

const Home = () => {
  const [open, setOpen] = useState(false);
  let [userData, setUserData] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/api/auth/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setUserData([res.data.data]));
  }, []);
  // console.log(import.meta.env.VITE_BASE_URL);

  const onFinish = (values) => {
    console.log(values);

    axios({
      url: `${import.meta.env.VITE_BASE_URL}/api/auth/edit`,
      method: "POST",
      data: values,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        notification.success({ message: "you successfully edited" });
      })
      .catch((err) => notification.error({ message: "you not edited" }));
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">User Form</h2>
          {!open &&
            userData?.map((value, idx) => (
              <div key={idx} className="my-4">
                <ImageUpload />
                <Typography> Email: {value.email}</Typography>
                <Typography> First name: {value.first_name}</Typography>
                <Typography> Last name: {value.last_name}</Typography>
              </div>
            ))}

          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <Form
              initialValues={{
                email: userData[0]?.email || "",
                first_name: userData[0]?.first_name || "",
                last_name: userData[0]?.last_name || "",
                address: userData[0]?.address || "",
              }}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  defaultValue={userData?.email}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                label="First Name"
                name="first_name"
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
              >
                <Input
                  defaultValue={userData?.first_name}
                  placeholder="Enter your first name"
                />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[
                  { required: true, message: "Please enter your last name!" },
                ]}
              >
                <Input
                  defaultValue={userData?.last_name}
                  placeholder="Enter your last name"
                />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
              >
                <Input.TextArea
                  defaultValue={userData?.address}
                  placeholder="Enter your address"
                  rows={3}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Home;
