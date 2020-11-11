import {useEffect} from 'react';
import API from './API';
const SessionUser = function(setEmail, setLoggedin){
    useEffect( () => {
        // this will run on component mount of App (because we are going to use this in App)
        // effectively it will run on a refresh
        API.getUser()
        .then( user => {
            console.log(user);
            if(user.data.hasOwnProperty('email')){
                setEmail(user.data.email);
                setLoggedin(true);
            }
        })
        .catch( err => {
            console.log(err);
        });
    }, [setEmail, setLoggedin]);
}

export default SessionUser;