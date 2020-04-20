import React, {useEffect} from "react";
import Router from "next/router";
import {useSelector} from "react-redux";
import UserPage from "../components/User";
import {RootState} from "../reducers";
import {UserState} from "../reducers/user";

const User = () => {
    const {auth} = useSelector<RootState, UserState>(state => state.user);
    useEffect(()=>{
        if(auth.email){
            Router.push('/')
        }
    },[auth && auth.email]);

    return <UserPage/>
};
export default User