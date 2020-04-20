import * as React from 'react';
import {useState, useCallback} from 'react';
import Form from "../components/MyForm/index";
import Card from "../components/MyCard/index";

import {CardTypes} from "../components/MyCard/index.d"

const SettingPage = () => {

    const card:CardTypes=  {
        auth: "Geonil",
        title :"당신의 봇을 팔아보세요!",
        label:"생각의 전환",
        text:"누구도 생각하지 못했던 자신만의 봇을 팔아 보세요",
        point:5,
        size :"s",
        direction : "row"
    };

    return (
        <>
            <Form target={"https://www.naver.com"}/>
            <Card {...card}/>
        </>
    )
};

export default SettingPage