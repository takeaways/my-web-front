import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { FaUnlock, FaLock } from "react-icons/fa";

import {
    ContentBlock,
    ContentHeader,
    ContentBody,
    ContentFooter,
    ContentItem,
    MakeNewTamplateButton,
    MakeNewTemplateBlock,
    MakeNewTemplateForm
} from "./styles";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { Button, Input, InputBlock, InputLabel } from "../../globalSyleComponents";
import { REQUEST_MAKE_NEW_TEMPLATE } from "../../../constants/actionNames";

const Content = ({ content }) => {

    const dispatch = useDispatch();
    //store state
    const auth = useSelector(state => state.user.auth);
    const isAddingTemplate = useSelector(state => state.bot.isAddingTemplate);
    const isSuccessAddTamplate = useSelector(state => state.bot.isSuccessAddTamplate);

    //local state
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [dec, setDec] = useState('');
    const [price, setPrice] = useState(0);


    //event funtion
    const onAddTemplate = useCallback(() => setShow(pre => !pre), []);
    const onSetTitle = useCallback((e) => setTitle(e.target.value), []);
    const onSetDec = useCallback((e) => setDec(e.target.value), []);
    const onSetPrice = useCallback((e) => setPrice(e.target.value), []);
    const onMakeNewTamplate = useCallback((e) => {
        e.preventDefault();
        if (!title.trim() || !dec.trim() || !price.trim()) {
            return alert("입력값 부정확 합니다.");
        }
        dispatch({
            type: REQUEST_MAKE_NEW_TEMPLATE,
            data: {
                templateName: title,
                dec,
                price
            }
        });
    }, [title, dec, price]);


    useEffect(() => {
        if (isSuccessAddTamplate) {
            setShow(false);
        }
    }, [isSuccessAddTamplate === true]);


    return (
        <ContentBlock className="content">
            <ContentHeader>
                <Nav />
                {auth && auth.email && (<MakeNewTamplateButton onClick={onAddTemplate}>{show ? <FaUnlock /> :
                    <FaLock />}</MakeNewTamplateButton>)}
            </ContentHeader>
            <ContentBody className={"contentBody"}>
                <ContentItem className={"contentBodyItem"}>
                    {show ? (
                        <MakeNewTemplateBlock onSubmit={onMakeNewTamplate}>
                            <MakeNewTemplateForm>
                                <InputBlock>
                                    <InputLabel htmlFor={"templateName"}>이름 : </InputLabel><br />
                                    <Input id={"templateName"} onChange={onSetTitle} />
                                </InputBlock>
                                <InputBlock>
                                    <InputLabel htmlFor={"templateName"}>설명 : </InputLabel><br />
                                    <Input id={"templateName"} onChange={onSetDec} />
                                </InputBlock>
                                <InputBlock>
                                    <InputLabel htmlFor={"templateName"}>가격 : </InputLabel><br />
                                    <Input type="number" id={"templateName"} onChange={onSetPrice} />
                                </InputBlock>
                                <InputBlock>
                                    <Button type={"submit"}>템플릿 등록</Button>
                                </InputBlock>
                            </MakeNewTemplateForm>
                        </MakeNewTemplateBlock>
                    ) : content}
                </ContentItem>
            </ContentBody>
            <ContentFooter >{"Made by GeonilJang"}</ContentFooter>
        </ContentBlock>
    )
};

export default Content