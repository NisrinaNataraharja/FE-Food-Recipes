/* eslint-disable react/no-unescaped-entities */
import styles from './auth.module.css'
import Link from 'next/link'
import Logo from '../../components/base/logo'
import { Input, Button } from '../../components/index'

const Register = () => {
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
        <form>
          <p className="mt-5 text-muted p-0 m-0">Email</p>
          <Input css="inputAuth" type="email" placeholder="Email" name="email" />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth" type="password" placeholder="Password" name="password" />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth" type="password" placeholder="Password" name="password" />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth" type="password" placeholder="Password" name="password" />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth" type="password" placeholder="Password" name="password" />
          <p className="d-flex justify-content-end mt-3">Forgot password ?</p>
          <Link href='/'><Button title="Signup" btn="btn-auth" /></Link>
          <p className="d-flex justify-content-center mt-3">
            Don't have an account ?
            <span className={styles["register-sub"]}>
              &nbsp;Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register