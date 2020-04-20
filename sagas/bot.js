import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import netRequest from "../utiles/netRequest";

import {
    REQUEST_BOT_TEMPLATES,
    SUCCESS_BOT_TEMPLATES,
    FAILURE_BOT_TEMPLATES,
    SUCCESS_MAKE_NEW_TEMPLATE,
    FAILURE_MAKE_NEW_TEMPLATE,
    REQUEST_MAKE_NEW_TEMPLATE,
    REQUEST_UPDATE_TEMPLATE,
    FAILURE_UPDATE_TEMPLATE, SUCCESS_UPDATE_TEMPLATE
} from "../constants/actionNames"
import axios from "axios";


//RequestTeamplate List
function requestTemplatesAPI() {
    // return netRequest.get('/posts', {
    //     withCredentials: true
    // });
    return netRequest.get('happy/bot/template/all', {});
}

function* requestTemplates() {
    try {
        const result = yield call(requestTemplatesAPI);
        yield put({
            type: SUCCESS_BOT_TEMPLATES,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_BOT_TEMPLATES,
            error
        });
    }
}

function* watchRequestTemplates() {
    yield takeLatest(REQUEST_BOT_TEMPLATES, requestTemplates);
}

//request make new Template
function requestMakeNewTemplateAPI(botData) {
    return netRequest.post('/bot/template', botData, {});
    // return netRequest.post('/template', {},{});
}

function* requestMakeNewTemplate(action) {
    try {
        const result = yield call(requestMakeNewTemplateAPI, action.data);
        yield put({
            type: SUCCESS_MAKE_NEW_TEMPLATE,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_MAKE_NEW_TEMPLATE,
            error
        });
    }
}

function* watchRequestMakeTemplate() {
    yield takeLatest(REQUEST_MAKE_NEW_TEMPLATE, requestMakeNewTemplate);
}

//request update Template
function requestUpdateTemplateAPI(botData) {
    return netRequest.put('/bot/template', botData, {});
}

function* requestUpdateTemplate(action) {
    try {
        const result = yield call(requestUpdateTemplateAPI, action.data);
        yield put({
            type: SUCCESS_UPDATE_TEMPLATE,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_UPDATE_TEMPLATE,
            error
        });
    }
}

function* watchRequestUpdateTemplate() {
    yield takeLatest(REQUEST_UPDATE_TEMPLATE, requestUpdateTemplate);
}

//request delete Template
function requestDeleteTemplateAPI({templateId}) {
    return netRequest.delete(`/bot/template/${templateId}`, {});
}

function* requestDeleteTemplate(action) {
    try {
        const result = yield call(requestDeleteTemplateAPI, action.data);
        yield put({
            type: SUCCESS_UPDATE_TEMPLATE,
            data: result.data
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: FAILURE_UPDATE_TEMPLATE,
            error
        });
    }
}

function* watchRequestDeleteTemplate() {
    yield takeLatest(REQUEST_UPDATE_TEMPLATE, requestDeleteTemplate);
}

// 사가 등록
export default function* botSaga() {
    yield all([
        fork(watchRequestTemplates),
        fork(watchRequestMakeTemplate),
        fork(watchRequestUpdateTemplate),
        fork(watchRequestDeleteTemplate),
    ]);
}
