import {all, fork, takeLatest, put, call} from 'redux-saga/effects';
import netRequest from "../utiles/netRequest";

import {
    REQUEST_AUTH_LOGIN, SUCCESS_AUTH_LOGIN, FAILURE_AUTH_LOGIN,
    SUCCESS_LOAD_USER, FAILURE_LOAD_USER, REQUEST_LOAD_USER
} from "../constants/actionNames"

//TODO: 로그인
function requestLogInAPI(logInData) {
    return netRequest.post('/auth/login', logInData, {
        withCredentials: false
    });
}

function* requestLogIn(action) {
    try {
        const result = yield call(requestLogInAPI, action.data);
        if(result.data.status !== "success"){
            yield put({
                type: FAILURE_AUTH_LOGIN,
                data:result.data.message
            });
            return
        }
        yield put({
            type: SUCCESS_AUTH_LOGIN,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_AUTH_LOGIN,
            error
        });
    }
}

function* watchRequestLogIn() {
    yield takeLatest(REQUEST_AUTH_LOGIN, requestLogIn);
}


//TODO: Loading User
function requestLoadingUserAPI(cookie) {
    return netRequest.get(`/auth/login?hpsm=${cookie}`, {
        withCredentials: false
    });
}

function* requestLoadingUser(action) {
    try {
        const result = yield call(requestLoadingUserAPI, action.cookie);
        yield put({
            type: SUCCESS_LOAD_USER,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_LOAD_USER,
            error
        });
    }
}

function* watchRequestLoadingUser() {
    yield takeLatest(REQUEST_LOAD_USER, requestLoadingUser);
}

export default function* botSaga() {
    yield all([
        fork(watchRequestLogIn),
        fork(watchRequestLoadingUser),
    ]);
}
