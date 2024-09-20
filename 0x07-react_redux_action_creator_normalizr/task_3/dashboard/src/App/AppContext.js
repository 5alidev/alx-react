export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const logOut = () => {
  user.isLoggedIn = false;
};

export const AppContext = React.createContext({
  user,
  logOut,
});
