import React from "react";
import { useState } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (email.trim() !== "") {
      setEnableSubmit(true);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.trim() !== "") {
      setEnableSubmit(true);
    }
  };

  return (
    <>
      <form action="">
        <label className={css(styles.label)} htmlFor="email">
          Email
        </label>
        <input
          className={css(styles.input)}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            handleChangeEmail(e);
          }}
        />
        <label className={css(styles.label)} htmlFor="password">
          Password
        </label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            handleChangePassword(e);
          }}
        />
        <input
          type="submit"
          value="OK"
          onClick={handleLoginSubmit}
          disabled={enableSubmit}
        />
      </form>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    marginRight: "6px",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
  input: {
    marginRight: "6px",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});

export default Login;
