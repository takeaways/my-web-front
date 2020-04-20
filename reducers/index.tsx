import { combineReducers, Reducer, AnyAction } from "redux";

import bot from "./bot";
import user from "./user";


const rootReduce = combineReducers({
    bot, user
});

export type RootState = ReturnType<typeof rootReduce>;

export default rootReduce;