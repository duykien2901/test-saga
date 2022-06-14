import { Formik } from "formik";
import { Form, FormItem, Input, SubmitButton } from "formik-antd";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./actions";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-20 test">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const { password, username } = values;
          dispatch(login({ password, username }));
          resetForm({
            values: {
              username: "",
              password: "",
            },
          });
        }}
      >
        {() => {
          return (
            <Form
              layout="vertical"
              className="m-auto w-6/12 rounded-xl shadow-md px-10 py-10"
            >
              <FormItem label="username" name={"username"} className=" ">
                <Input
                  name="username"
                  autoFocus={false}
                  suffix={""}
                  autoComplete={false}
                />
              </FormItem>
              <FormItem label="Password" name={"password"} autoComplete={false}>
                <Input
                  name="password"
                  type={"password"}
                  autoFocus={false}
                  suffix={""}
                />
              </FormItem>
              <SubmitButton>Login</SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
