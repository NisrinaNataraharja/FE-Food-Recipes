/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Router from "next/router";
import styles from './auth.module.css'
import Link from 'next/link'
import Logo from '../../components/base/logo'
import { Input, Button } from '../../components/index'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })

  }
  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post(`${process.env.NEXT_APP_URL_API_HEROKU}user/login`, formLogin)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        localStorage.setItem("id", res.data.data.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
        });
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("", err.response.data.message, "error");
      })
  }

  return (
    <div className={styles.main}>
      <div className={styles["main-left"]}>
        <Link href="/landing">
          <Logo width="80px" height="105px" color="#ffff" />
        </Link>
      </div>
      <div className={styles["main-right"]}>
        <p className={styles["right-title"]}>Welcome</p>
        <p className={styles["right-sub-title"]}>Log in into your existing account</p>
        <form onSubmit={(e) => handleLogin(e)}>
          <p className="mt-5 text-muted p-0 m-0">Email</p>
          <Input css="inputAuth"
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formLogin.email}
            onChange={(e) => handleChange(e)}
          />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={formLogin.password}
            onChange={(e) => handleChange(e)}
          />
          <p className="d-flex justify-content-end mt-3">Forgot password ?</p>
          <Button title="Login" btn="btn-auth" />
          <p className="d-flex justify-content-center mt-3">
            Don't have an account ?
            <Link href='/auth/register'>
              <span className={styles["register-sub"]}>
                &nbsp;Sign up
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login