import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/RegisterStyle.css';

const Register = () => {
  const onFinishedHandler = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishedHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Pasword" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
              gap: '10px',
            }}
          >
            <span>Already have an accout?</span>
            <Link to="/login">Login</Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
