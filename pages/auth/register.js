/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import styles from './auth.module.css'
import Link from 'next/link'
import Router from 'next/router'
import Swal from 'sweetalert2'
import Logo from '../../components/base/logo'
import { Input, Button } from '../../components/index'
import axios from 'axios'

const Register = () => {
  const [password, setPassword] = useState('')
  const [isConfirm, setIsConfirm] = useState(true)
  const [register, setRegister] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  const handleChange = (e) => {
    e.persist()
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }
  const handlePassword = (e) => {
    e.persist()
    setPassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password !== register.password) {
        setIsConfirm(false)
        Swal.fire("", err.response.data.message, "error");
        return
      }else{
      const res = await axios
      .post(`${process.env.NEXT_APP_URL_API}user/register`, register)
      console.log(res.data.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
      });
      Router.push('/auth/login') 
  }
} catch (error) {
  console.log(error)
  // Swal.fire("", err.response.data.message, "error");
  
}
}

return (
  <div className={styles.mainRegister}>
    <div className={styles["main-left"]}>
      <Link href="/">
        <Logo width="80px" height="105px" color="#ffff" />
      </Link>
    </div>
    <div className={styles["main-right"]}>
      <p className={styles["right-title"]}>Welcome</p>
      <p className={styles["right-sub-title"]}>Log in into your existing account</p>
      <form onSubmit={(e) => handleSubmit(e)} >
        <p className="mt-5 text-muted p-0 m-0">Name</p>
        <Input css="inputAuth"
          type="text"
          placeholder="Enter your name"
          name="name"
          required
          value={register.name}
          onChange={(e) => handleChange(e)}
        />
        <p className="mt-4 text-muted p-0 m-0">Email address</p>
        <Input css="inputAuth"
          type="email"
          placeholder="Enter email address"
          name="email"
          required
          value={register.email}
          onChange={(e) => handleChange(e)}
        />
        <p className="mt-4 text-muted p-0 m-0">Phone Number</p>
        <Input css="inputAuth"
          type="text"
          placeholder="phone"
          name="phone"
          required
          value={register.phone}
          onChange={(e) => handleChange(e)}
        />
        <p className="mt-4 text-muted p-0 m-0">Password</p>
        <Input css="inputAuth"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={register.password}
          onChange={(e) => handleChange(e)}
        />
        <p className="mt-4 text-muted p-0 m-0">Confirm password</p>
        <Input css="inputAuth"
          type="password"
          placeholder="Confirm password"
          name="confirmpassword"
          required
          // value={register.password}
          onChange={(e) => handlePassword(e)}
        >
          {isConfirm === false && <p>Input the right password!</p>}
        </Input>
        <p className="d-flex justify-content-end mt-3">Forgot password ?</p>
        <Button title="Signup" btn="btn-auth" type='submit'/>
        <p className="d-flex justify-content-center mt-3">
          Already have an account ?
          <Link href='/auth/login'>
            <span className={styles["register-sub"]}>
              &nbsp;Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  </div>
)
}

export default Register