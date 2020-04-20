import * as React from 'react';
import * as Styles from "./styles";

import Card from "../TemplateCard/index";
import { CardTypes } from "../../MyCard/index.d";
import { useCallback, useEffect, useState } from "react";

const card: CardTypes = {
    auth: "Geonil",//
    title: "당신의 봇을 팔아보세요!",
    label: "생각의 전환",//
    text: "누구도 생각하지 못했던 자신만의 봇을 팔아 보세요",//
    point: 4,//
    size: "s",//
    direction: "column"//
};

const TemplateForm = () => {

    //state
    const [templateData, setTemplateData] = useState<CardTypes>(card);
    const [label, setLabel] = useState<string>("생각의 전환.");
    const [text, setText] = useState<string>("누구도 생각하지 못했던 자신만의 봇을 팔아 보세요.");
    const [point, setPoint] = useState<number>(3);
    const [size, setSize] = useState<("s" | "m" | "l")>("s");
    const [direction, setDirection] = useState<("column" | "row")>("row");
    const [auth, setAuth] = useState<string>("Geonil");
    const [title, setTitle] = useState<string>("당신의 봇을 팔아보세요!");

    //event Handler
    const onChangeLabel = useCallback((e) => {
        setLabel(e.target.value);
    }, []);
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onChangePoint = useCallback((e) => {
        setPoint(e.target.value);
    }, []);
    const onChangeSize = useCallback((s) => {
        setSize(s);
    }, []);
    const onChangeDir = useCallback((d) => {
        setDirection(d);
    }, []);


    return (
        <>
            <Styles.preViewBlock className={"preViewBlock"}>
                <Card {...templateData} label={label} text={text} point={point} size={size} direction={direction} />
            </Styles.preViewBlock>
            <Styles.settingBlock className={"settingForm"}>
                <Styles.settingBlockDiv className={"settingBlock"}>
                    <Styles.settingInput placeholder={"라벨을 입력하세요..."} value={label} onChange={onChangeLabel} />
                    <Styles.settingText value={text} onChange={onChangeText} />
                    <Styles.settingButton>등록</Styles.settingButton>
                </Styles.settingBlockDiv>
                <Styles.settingBlockDiv className={"settingBlock"}>
                    <Styles.settingsItem>
                        <label>별점 {point} : <Styles.settingRange value={point} onChange={onChangePoint} /></label>
                    </Styles.settingsItem>
                    <Styles.settingsItem>
                        <label>S :<Styles.settingRadio name={"myRadio"} defaultChecked value={size} onChange={() => onChangeSize('s')} />  </label>
                        <label>M :<Styles.settingRadio name={"myRadio"} value={size} onChange={() => onChangeSize('m')} />  </label>
                        <label>L :<Styles.settingRadio name={"myRadio"} value={size} onChange={() => onChangeSize('l')} />  </label>
                    </Styles.settingsItem>
                    <Styles.settingsItem>
                        <label>Row:<Styles.settingRadio name={"myDir"} defaultChecked value={direction} onChange={() => onChangeDir('row')} />  </label>
                        <label>Column :<Styles.settingRadio name={"myDir"} value={direction} onChange={() => onChangeDir('column')} />  </label>
                    </Styles.settingsItem>
                    <Styles.settingsItem>4</Styles.settingsItem>
                </Styles.settingBlockDiv>
            </Styles.settingBlock>
        </>
    )
};

export default TemplateForm