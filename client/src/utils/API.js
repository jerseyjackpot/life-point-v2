import Axios from "axios";

export default {
    signup: function(userData){
        // return axios.post("/api/signup", userData);

        // fake version
        return {
            then: function(cb){
                cb({
                    email: "Test",
                    id: 1
                })
            }
        }
    },
    login: function(userData){
        // return axios.post("/api/login", userData);

        // fake version
        return {
            then: function(cb){
                cb({
                    email: "Test",
                    id: 1
                });
            }
        }
    }
};