import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = ({ className, ...props }) => {
  // const { user } = useSelector((state) => state.user);
  // console.log(user);
  // const isLogin = props.isLogin;
  // const isLogin = props.isLogin;
  // const [isLogin, setLogin] = useState(false);
  // const [isRole, setRole] = useState(null)
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("refreshToken");
  //   navigate("/login");
  //   setLogin(false);
  // };
  // useEffect(() => {
  //   const localData = localStorage.getItem("token");
  //   if (localData) {
  //     setLogin(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   const roleuser = localStorage.getItem("Role");
  //   if (roleuser) {
  //     setRole(roleuser);
  //   }
  // }, []);

  return (
    <nav className={className}>
      <nav className="navbar bg-white navbar-expand-lg navbar-light bg-light">
        <div className="container position-relative text-align-center">
          <div className="col-4">
            <ul className={styles.ul}>
              <li className={`${styles.li} me-5 mt-1`}>
                <Link href="/landing">
                  <p>Home</p>
                </Link>
              </li>
              <li className={`${styles.li} me-5  mt-1`}>
                <Link href="/recipe/AddRecipe">
                  <p>Add recipe</p>
                </Link>
              </li>
              <li className={`${styles.li} me-5  mt-1`}>
                <Link href="/landing">
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
            {/* <Link href="/landing">
              <p>Home</p>
            </Link> */}
          </div>
          <div className="mt-2">
            <ul className={styles.ul}>
              <li className={`${styles.li} me-5 mt-1`}>
                <Link href="/auth/login">
                  <p>Login</p>
                </Link>
              </li>
            </ul>
            {/* <ul className={styles.ul}>
              <li className={`${styles.li}  mt-1`}>
              <Link href="/landing">
              <p>Home</p>
            </Link>
              </li>
            </ul> */}
            {/* {isLogin ? (
              <ul>
                <li className=" mt-1">
                  <Button btn="btnAva" title={<img src={bell} alt="" />}></Button>
                </li>
                <li className="ms-2 mt-1">
                  <Button btn="btnAva" title={<img src={mail} alt="" />}></Button>
                </li>
                <li className="ms-2">
                  <div className={styles.dropdown}>
                    <Button btn="btnAva" title={<img src={ava} alt="" />}></Button>
                    <div className={styles.dropdown_content}>
                    <Link to={isRole === 'Recruiter' ? "/companyprofile"   : "/profilepekerja" }>Profile </Link> 
                      <p  onClick={handleLogout}>
                        Logout
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">
                    <Button btn="btnMasuk" title="Masuk"></Button>
                  </Link>
                </li>
                <li>
                  <div className={styles.dropdown}>
                    <Button btn="btnDaftar" title="Daftar"></Button>
                    <div className={styles.dropdown_content}>
                      <Link to="/registerUser">pekerja </Link>
                      <Link to="/registerCompany">perekrut</Link>
                    </div>
                  </div>
                </li>
              </ul>
            )} */}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
