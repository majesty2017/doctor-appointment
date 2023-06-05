import { Form, Input, message } from "antd";
import "../styles/LoginStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/loadingSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishedHandler = async (data) => {
    try {
      dispatch(showLoading());
      await axios.post("/api/v1/user/login", data).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          message.success(res.data.message);
          navigate("/");
          dispatch(hideLoading());
        } else {
          dispatch(hideLoading());
          message.error(res.data.message);
        }
      });
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishedHandler}
          className="login-form"
        >
          <h3 className="text-center">Login into your account!</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Pasword" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              gap: "10px",
            }}
          >
            <span>Don't have an accout?</span>
            <Link to="/register">Sign Up</Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
