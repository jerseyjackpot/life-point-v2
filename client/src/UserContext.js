import React from "react";

const UserContext = React.createContext({
  email: "",
  loggedin: false,
  setEmail: () => { },
  setLoggedin: () => { }
});

export default UserContext;
