import { Form, Input } from 'antd';
import '../styles/LoginStyle.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinishedHandler = (e) => {
    console.log(e);
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
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
              gap: '10px',
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
