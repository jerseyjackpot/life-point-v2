import Axios from "axios";

export default {
    signup: function (userData) {
        return Axios.post("/api/signup", userData);

    },
    login: function (userData) {
        return Axios.post("/api/login", userData);
    },
    getCalendar: function () {
        return Axios.get("/api/calendar");
        // Gets the data for each mood based on the journal and UserId they are tied to
    },
    getAffirmation: function(){
        return Axios.get("/api/affirmation");
        
    },
    

}

