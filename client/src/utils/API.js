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
    postEntry: function (userData){
        console.log("line20");
        return Axios.post("/api/entry", userData);
    },
    getEntry: function (date){
        console.log(date.getTime());
        return Axios.get("/api/entry/" + date.getTime());
    },
    /*getDate: function (date){
        console.log("from api.js", date);
        //return Axios.get("/api/entry/" + date.date.toTime())
        return null;
    },*/
    getUser: function(){
        return Axios.get("/api/user/data");
      }
    

}

