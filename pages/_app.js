import * as React from "react";
import {NextPage, NextPageContext} from "next";


import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider, useDispatch } from 'react-redux';
import "../public/css/html.css"

import AppLayout from "../components/AppLayout";

import rootReducer from "../reducers";
import rootSaga from '../sagas';
import { REQUEST_LOAD_USER, REQUEST_BOT_TEMPLATES } from "../constants/actionNames";
import { getCookie } from "../utiles/cookie";
import netRequest from '../utiles/netRequest'


const App = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    )
};


App.getInitialProps = async (context) => {
    const { ctx, Component } = context;
    let pageProps = {};

    const state = ctx.store.getState();
    const cookie = ctx.isServer ? ctx.req.headers.cookie : "";

    const myCookie = getCookie("hpsm", cookie);

    if (myCookie) {
        netRequest.headers
        ctx.store.dispatch({
            type: REQUEST_LOAD_USER,
            cookie: myCookie
        })
    }

    // ctx.store.dispatch({
    //     type: REQUEST_BOT_TEMPLATES
    // });

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx) || {};
    }

    return { pageProps };
};

const storeConfig = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewars = [sagaMiddleware];
    const env = process.env.NODE_ENV;
    const enhancer =
        env === 'development' ? composeWithDevTools(applyMiddleware(...middlewars)) : compose(applyMiddleware(...middlewars));
    const store = createStore(rootReducer, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};



export default withRedux(storeConfig)(withReduxSaga(App));
