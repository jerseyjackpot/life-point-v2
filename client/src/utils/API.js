import Axios from "axios";

export default {
    signup: function (userData) {
        return Axios.post("/api/signup", userData);

    },
    login: function (userData) {
        return Axios.post("/api/login", userData);

        
    },
    getCalendar: function () {
        // return axios.get("/api/calendar");
        // Gets the data for each mood based on the journal and UserId they are tied to
        return {
            then: function (cb) {
                cb({
                    email: "Test",
                    id: 1
                });
            }
        }

    },
    getAffirmation: function(){
        return Axios.get("/api/affirmation");
        // return {
        //     then: function(cb){
        //         cb({
        //             affirmation: "Have a nice day",
        //             id: 7
        //         });
        //     }
        // }
    },
    getMoods: function(){
        return Axios.get("/api/entry");
    }
}

