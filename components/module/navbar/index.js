import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import { Button } from '../../index'

const Navbar = ({ className, ...props }) => {
  const [isLogin, setLogin] = useState(false);
  // const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("id")
    Router.push("/auth/login");
    setLogin(false);
  };
  useEffect(() => {
    const localData = localStorage.getItem("token");
    if (localData) {
      setLogin(true);
    }
  }, []);

  const [profile, setProfile] = useState({})
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_APP_URL_API_HEROKU}user/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        console.log(res);
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <nav className={className}>
      <nav className="navbar bg-white navbar-expand-lg navbar-light bg-light">
        <div className="container position-relative text-align-center">
          <div className="col-4">
            <ul className={styles.ul}>
              <li className={`${styles.li} me-5 mt-1`}>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className={`${styles.li} me-5  mt-1`}>
                <Link href="/recipe/add/">
                  <p>Add recipe</p>
                </Link>
              </li>
              <li className={`${styles.li} me-5  mt-1`}>
                <Link href="/profile/userProfile">
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            {isLogin ? (
              <ul>
                <li className={`${styles.liAva} ms-2`}>
                  <div className={styles.dropdown}>
                    <Button btn="btnAva" title={<img src={profile.avatar} alt="avatar" />}></Button>
                    <div className={styles.dropdown_content}>
                      <p onClick={handleLogout}>
                        Logout
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className={styles.ul}>
                <li className={`${styles.li} me-5 mt-1`}>
                  <Link href="/auth/login">
                    <p>Login</p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
