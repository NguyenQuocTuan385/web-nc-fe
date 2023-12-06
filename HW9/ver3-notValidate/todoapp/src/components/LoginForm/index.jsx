import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/reducers/Status/actionTypes';

const LoginForm = ({  }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (username === "admin" && password === "admin") {
      navigate("/todolist")
      dispatch(setLoggedIn(true))
      return;
    }
    alert("Tài khoản hoặc mật khẩu sai");
  };

  return (
  <div className="login-form">
    <form onSubmit={onSubmit}>
      <h1>Form Đăng nhập</h1>
      <div className="content">
        <div className="input-field">
          <input
            type="username"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="action">
        <button type='submit'>Đăng nhập</button>
      </div>
    </form>
  </div>
  );
};

export default LoginForm;