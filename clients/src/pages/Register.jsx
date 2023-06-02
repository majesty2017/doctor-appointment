import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/RegisterStyle.css';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const onFinishedHandler = async (e) => {
    try {
      await axios.post('/api/v1/user/register', e).then(res => {
        if (res.data.success) {
          message.success(res.data.message)
          navigate('/login')
        } else {
          message.error('Failed to register')
        }
      })
    } catch (error) {
      console.log(error);
      message.error(`Something went wrong!`)
    }
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
