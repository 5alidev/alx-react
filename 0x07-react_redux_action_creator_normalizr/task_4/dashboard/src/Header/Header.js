import React from "react";
import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

const Header = () => {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <div className={css(styles.App_header)}>
        <img
          src={logo}
          alt="Holberton logo"
          className={css(styles.App_header_img)}
        />
        <h1 className={css(styles.App_header_h1)}>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <h2>
            Welcome<strong> {user.email} </strong>
            <em>
              <a href="#" onClick={logOut}>
                (logout)
              </a>
            </em>
          </h2>
        </section>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  App_header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "6px solid #E0354B",
  },
  App_header_h1: {
    color: "#E0354B",
  },
  App_header_img: {
    height: "200px",
  },
});

export default Header;
