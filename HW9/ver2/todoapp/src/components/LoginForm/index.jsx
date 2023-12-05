import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from "../../redux/reducers/Status/actionTypes";
import { useForm } from 'react-hook-form';

const LoginForm = ({  }) => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      dispatch(setLoggedIn(true));
      navigate("/todolist")
      return;
    }
    alert("Tài khoản hoặc mật khẩu sai");
  };

  return (
  <div className="login-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Form Đăng nhập</h1>
      <div className="content">
        <div className="input-field">
          <input
            type="username"
            placeholder="Tên đăng nhập"
            {...register("username", {
              required: "Username is required" ,
              minLength: {
                value: 4,
                message: "Min length is 4"
              }
            })}
          />
          <p className='error'>{errors.username?.message}</p>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password", { required: "Password is required" })}
          />
          <p className='error'>{errors.password?.message}</p>
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