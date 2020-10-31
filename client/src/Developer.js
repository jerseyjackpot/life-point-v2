import React, { useContext } from "react";
import UserContext from "../UserContext";

function DeveloperInfo() {
  // const { name, mood, excitementLevel, email } = useContext(DeveloperContext);
 const {email, loggedin} = useContext (UserContext);

  return (
    <div className="card">
      <div>
        Email: {email}
      </div>
      <div>
        LoggedIn: {loggedin}
      </div>
    </div>
  );
}

export default DeveloperInfo;
