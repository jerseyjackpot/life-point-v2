import React, {useContext} from "react";
import "../pages/style.css";
import UserContext from "../UserContext.js";

function Footer() {
  const {email, loggedin} = useContext (UserContext);
  return (
    <div>
      {loggedin && "Logged in footer"}
      <div class="fixed-bottom">
        <footer class="footer">
          <h2>Created by Group 4 :-)</h2>
          <h3>Cristhal, Jackie, Mustafa, and Pat</h3>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
