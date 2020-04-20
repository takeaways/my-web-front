import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_BOT_TEMPLATES } from "../constants/actionNames";
import Template from "../components/Bot/Template";
import { RootState } from "../reducers";
import { BotState } from "../reducers/bot";


const Product = () => {
    const dispatch = useDispatch();
    const { botTemplates } = useSelector<RootState, BotState>(state => state.bot);
    // useEffect(() => {
    //     dispatch({type: REQUEST_BOT_TEMPLATES});
    // }, []);

    return botTemplates && botTemplates.length > 0 && <Template botTemplates={botTemplates} />
};

Product.getInitialProps = async (context: any) => {
    context.store.dispatch({
        type: REQUEST_BOT_TEMPLATES
    })
};


export default Product;