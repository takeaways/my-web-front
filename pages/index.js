import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_BOT_TEMPLATES } from "../constants/actionNames";
import Template from "../components/Bot/Template";

const Main = () => {
    console.log(">>>> ", process.env.myName);
    console.log(">>>> ", process.env.NODE_ENV);
    const dispatch = useDispatch();
    const botTemplates = useSelector(state => state.bot.botTemplates);
    // useEffect(() => {
    //     dispatch({type: REQUEST_BOT_TEMPLATES});
    // }, []);

    return botTemplates && botTemplates.length > 0 && <Template botTemplates={botTemplates} />
};


Main.getInitialProps = async (context) => {
    context.store.dispatch({
        type: REQUEST_BOT_TEMPLATES
    })
};


export default Main;