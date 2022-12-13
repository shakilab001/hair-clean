import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/API";
import { CustomAlert } from "../../components/Alert/alert";
import SignUpLoginLayout from "../../components/SignUpLogin";
import { UserContext } from "../../context/authContext";
import styles from "./Login.module.css";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [caughtError, setCaughtError] = useState({
    message: '',
    show: false
  })
  const { fetchUser, loggedIn } = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (loggedIn) {
      navigate('/upload')
    }
  }, [loggedIn])

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      })
      const responseData = await response.json()
      if (response.status === 200) {
        localStorage.setItem('access', responseData.access_token)
        localStorage.setItem('refresh', responseData.refresh_token)
        fetchUser()
      } else {
        if (typeof responseData.message === 'object' && responseData.message !== null) {
          throw new Error(responseData.message?.email)
        }
        throw new Error(responseData.message)
      }
    } catch (err) {
      setCaughtError({
        message: err.message,
        show: true
      })
      setTimeout(() => {
        setCaughtError({
          message: '',
          show: false
        })
      }, 4000)
    }
  }

  return (
    <SignUpLoginLayout>
      {caughtError.show && <CustomAlert message={caughtError.message} close={() => setCaughtError({ message: '', show: false })} />}
      <h1 className={styles.heading}>Login</h1>
      <h2 className={styles.sub_title}>
        Put your login credentials below to start
      </h2>
      <form>
        <div className={styles.children_form_section}>
          <div className="w-100">
            <h1 className={styles.children_form_label}>Email</h1>
            <input
              className={`w-100 ${styles.children_form_input}`}
              type="text"
              placeholder="Enter your last email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
          </div>
          <div className="w-100">
            <h1 className={styles.children_form_label}>Password</h1>
            <div className={styles.password}>
              <img
                src="/assets/images/eye.svg"
                alt=""
                onClick={togglePassword}
              />
              <input
                className={`w-100 ${styles.children_form_input}`}
                type={passwordShown ? "text" : "password"}
                placeholder="Enter password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className={styles.register_btn}>
            <img src="assets/images/login.svg" alt="" /> LOGIN
          </button>
          <h1 className={styles.register_with}>Or login using</h1>
          <div className={styles.social_login}>
            <img
              className={styles.social_login_icon}
              src="assets/images/facebook.svg"
              alt=""
            />
            <img
              className={styles.social_login_icon}
              src="assets/images/google.svg"
              alt=""
            />
          </div>
          <div className={styles.login}>
            <h2 className={styles.have_an_account}>
              Don't have an account yet?
            </h2>
            <Link className={styles.login_link} to="/register">
              Register
            </Link>
          </div>
        </div>
      </form>
    </SignUpLoginLayout>
  );
};

export default Login;
