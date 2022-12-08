import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import axios from "axios";
import styles from "./styles.module.css";
import { useCookies } from "react-cookie";
const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({}); 
  const [cookie, setCookie] = useCookies();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleEmail = (e) => {
    setLoginForm({ ...loginForm, email: e.target.value });
  };

  const handlePassword = (e) => {
    
    setLoginForm({ ...loginForm, password: e.target.value });
  
  };
  const handleLogin = async(e) => {
    console.log(loginForm);
      const Data=await axios.post(
      "https://fakestoreapi.com/auth/login",
      loginForm
    );
    console.log(Data)
  };
  return (
    <div>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type="text"
          value={loginForm.email}
          onChange={handleEmail}
          placeholder="Enter Your Email"
        />
      </div>
      <div className={styles.formFiled}>
        <input
          className={styles.LoginInput}
          type={passwordShown ? "text" : "password"}
          value={loginForm.password}
          onChange={handlePassword}
          placeholder="Enter Your Password"
        />
        <button className={styles.ShowHideButton} onClick={togglePassword}>
          {" "}
          {passwordShown ? <MdOutlineRemoveRedEye /> : <RxEyeClosed />}
        </button>
      </div>
      <div className={styles.formFiled}>
        <button className={styles.LoginButton} onClick={handleLogin}>
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
