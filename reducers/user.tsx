import Router from 'next/router'
import {
    REQUEST_AUTH_LOGIN, SUCCESS_AUTH_LOGIN, FAILURE_AUTH_LOGIN,
    REQUEST_LOAD_USER, SUCCESS_LOAD_USER, FAILURE_LOAD_USER
} from "../constants/actionNames";
import { setCookie } from "../utiles/cookie";


export interface User {
    _id:string;
    email:string;
}
export interface UserState {
    auth:User,
    isLoadingUser: boolean,
    isSuccessLoadingUser: boolean
}


export const initialState = {
    auth: {},
    isLoadingUser: false,
    isSuccessLoadingUser: false
};

const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case REQUEST_AUTH_LOGIN: {
            return {
                ...state
            }
        }
        case SUCCESS_AUTH_LOGIN: {
            const result = action.data;
            if (result.status === "success") {
                setCookie("hpsm", result.data.accessToken, 1);
                return {
                    ...state,
                    auth: result.data
                }
            }
            return Router.push('/user')
        }
        case FAILURE_AUTH_LOGIN: {
            if (action.data === "auth auth error") {
                alert("로그인 정보가 정상적이지 않습니다.");
            }
            return {
                ...state
            }
        }
        case REQUEST_LOAD_USER: {
            return {
                ...state,
                isLoadingUser: true,
                isSuccessLoadingUser: false
            }
        }
        case SUCCESS_LOAD_USER: {
            const result = action.data.data;
            return {
                ...state,
                isLoadingUser: false,
                isSuccessLoadingUser: true,
                auth: { ...result }
            }
        }
        case FAILURE_LOAD_USER: {

            return {
                ...state,
                isLoadingUser: false,
                isSuccessLoadingUser: false
            }
        }
        default: {
            return { ...state }
        }
    }
};


export default userReducer