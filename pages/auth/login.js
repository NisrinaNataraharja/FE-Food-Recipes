/* eslint-disable react/no-unescaped-entities */
import styles from './auth.module.css'
import Link from 'next/link'
import Logo from '../../components/base/logo'
import { Input, Button } from '../../components/index'

const Login = () => {
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
        <form>
          <p className="mt-5 text-muted p-0 m-0">Email</p>
          <Input css="inputAuth" type="email" placeholder="Email" name="email" />
          <p className="mt-4 text-muted p-0 m-0">Password</p>
          <Input css="inputAuth" type="password" placeholder="Password" name="password" />
          <p className="d-flex justify-content-end mt-3">Forgot password ?</p>
          <Link href='/landing'><Button title="Login" btn="btn-auth" /></Link>
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