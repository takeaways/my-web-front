import {all, call} from 'redux-saga/effects';

import bot from "./bot";
import user from "./user";

export default function* rootSaga() {
    yield all([
        call(bot),
        call(user)
    ]);
}
