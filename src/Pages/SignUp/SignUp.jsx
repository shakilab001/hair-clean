import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/API";
import { CustomAlert } from "../../components/Alert/alert";
import { CustomSuccess } from "../../components/Alert/Success";
import SignUpLoginLayout from "../../components/SignUpLogin";
import { UserContext } from "../../context/authContext";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [selected, setSelected] = useState("women");
  const [passwordShown, setPasswordShown] = useState({
    password1: false,
    password2: false,
  });
  const [success, setSuccess] = useState(false)
  const togglePassword = (value) => {
    if (value === "password1") {
      setPasswordShown({
        ...passwordShown,
        password1: !passwordShown.password1,
      });
    }
    if (value === "password2") {
      setPasswordShown({
        ...passwordShown,
        password2: !passwordShown.password2,
      });
    }
  };

  const change = (select) => {
    console.log(select);
  };

  const handleChange = (e) => {
    setSelected(e.currentTarget.value);
    change(e.currentTarget.value);
  };

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    password2: ''
  })
  const navigate = useNavigate()

  const [caughtError, setCaughtError] = useState({
    message: '',
    show: false
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registerData.firstName === "") {
        throw new Error("First Name is empty")
      } else if (registerData.lastName === "") {
        throw new Error("Last Name is empty")
      } else if (registerData.password === "") {
        throw new Error("password is empty")
      } else if (registerData.password === registerData.password2) {
        const response = await fetch(API + '/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registerData)
        })
        const responseData = await response.json()
        if (response.status === 200) {
          setSuccess(true)
          setTimeout(() => navigate('/login'), 4000)
        } else {
          console.log(responseData)
          if (responseData.message.email !== undefined) {
            throw new Error(responseData.message.email)
          } else {
            throw new Error(responseData.message)
          }
        }
      } else {
        throw new Error("password not matching with confirm password")
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
      {success && <CustomSuccess message={"Congratulations! You have registered Successfully. Redirecting to login page..."} close={() => setSuccess(false)} />}
      {caughtError.show && <CustomAlert message={caughtError.message} close={() => setCaughtError({ message: '', show: false })} />}
      <h1 className={styles.heading}>Register</h1>
      <h2 className={styles.sub_title}>Get access with create new account</h2>
      <form>
        <div className={styles.children_form_section}>
          <div className={`row ${styles.form_gap}`}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h1 className={styles.children_form_label}>First Name</h1>
              <input
                className={`w-100 ${styles.children_form_input}`}
                type="text"
                value={registerData.firstName}
                onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                placeholder="Enter your first name"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <h1 className={styles.children_form_label}>Last Name</h1>
              <input
                className={`w-100 ${styles.children_form_input}`}
                type="text"
                placeholder="Enter your last name"
                value={registerData.lastName}
                onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="w-100">
            <h1 className={styles.children_form_label}>Email</h1>
            <input
              className={`w-100 ${styles.children_form_input}`}
              type="text"
              placeholder="Enter your last email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
          </div>
          <div className={`row ${styles.form_gap}`}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <h1 className={styles.children_form_label}>Password</h1>
              <div className={styles.password}>
                <img
                  src="/assets/images/eye.svg"
                  alt=""
                  onClick={() => togglePassword("password1")}
                />
                <input
                  className={`w-100 ${styles.children_form_input}`}
                  type={passwordShown.password1 ? "text" : "password"}
                  placeholder="Enter password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <h1 className={styles.children_form_label}>
                Password confirmation
              </h1>
              <div className={styles.password}>
                <img
                  src="/assets/images/eye.svg"
                  alt=""
                  onClick={() => togglePassword("password2")}
                />
                <input
                  className={`w-100 ${styles.children_form_input}`}
                  type={passwordShown.password2 ? "text" : "password"}
                  placeholder="Enter confirmation"
                  value={registerData.password2}
                  onChange={(e) => setRegisterData({ ...registerData, password2: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className={`row align-items-center ${styles.form_gap}`}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <h1 className={styles.gender}>
                Which category will you shop for this new profile?
              </h1>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <ul className={styles.profile}>
                <li>
                  <input
                    type="radio"
                    id="women"
                    name="gender"
                    value="women"
                    onChange={handleChange}
                    checked={selected === "women"}
                  />
                  <label htmlFor="women">
                    <img src="/assets/images/women.svg" alt="" />
                  </label>
                  <p>Women</p>
                </li>
                <li>
                  <input
                    type="radio"
                    id="men"
                    name="gender"
                    value="men"
                    onChange={handleChange}
                    checked={selected === "men"}
                  />
                  <label htmlFor="men">
                    <img src="/assets/images/men.svg" alt="" />
                  </label>
                  <p>Men</p>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kid"
                    name="gender"
                    value="kid"
                    onChange={handleChange}
                    checked={selected === "kid"}
                  />
                  <label htmlFor="kid">
                    <img src="/assets/images/kid.svg" alt="" />
                  </label>
                  <p>Kid</p>
                </li>
              </ul>
            </div>
          </div>
          <button onClick={handleSubmit} className={styles.register_btn}>
            <img src="assets/images/register.svg" alt="" /> REGISTER
          </button>
          <h1 className={styles.register_with}>Or register using</h1>
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
            <h2 className={styles.have_an_account}>Have an account?</h2>
            <Link className={styles.login_link} to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </SignUpLoginLayout>
  );
};

export default SignUp;
