import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import { AppContext } from "../App/AppContext";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = state.get("user");
  const isLoggedIn = state.get("isUserLoggedIn");
  return { user, isLoggedIn };
};

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool,
};

Footer.defaultProps = {
  user: {
    email: "",
    password: "",
  },
  isLoggedIn: false,
};

export default connect(mapStateToProps)(Footer);
