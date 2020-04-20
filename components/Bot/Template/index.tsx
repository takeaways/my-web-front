import * as React from "react";
import {useCallback, useState, useRef, FunctionComponent} from 'react';
import {useDispatch} from "react-redux";
import {
    TemplateBlock, TemplateItem, TemplateItemBody,
    TemplateItemFooter, TemplateItemHeader, TemplateItemForm,
    TemplateItemInput, TemplateItemLabel, TemplateItemButton, TemplateItemInputNumber
} from './styles';
import {Bot} from '../../../reducers/bot'
import {REQUEST_UPDATE_TEMPLATE} from "../../../constants/actionNames";



const Template: FunctionComponent<{ botTemplates: Bot[] }> = ({botTemplates}) => {
    //dipatch
    const dispatch = useDispatch();

    //states
    const [show, setShow] = useState(true);
    const currentTemplate = useRef<HTMLDivElement>();
    const currentTemplateSibling = useRef<HTMLDivElement>();

    //event handlers
    const onClickItem = useCallback((e, t) => {
        const me: HTMLDivElement = e.target;
        const sibling: HTMLDivElement = me.previousElementSibling as HTMLDivElement;
        if (currentTemplateSibling.current) {
            currentTemplateSibling.current.style.display = "none";
        }
        if (currentTemplate.current) {
            currentTemplate.current.style.display = "block"
        }
        currentTemplate.current = me;
        currentTemplateSibling.current = sibling;
        sibling.style.display = "block";
        me.style.display = "none";
    }, [show]);
    const onSubmitFix = useCallback((e) => {
        e.preventDefault();
        const nameInput = e.target.querySelector("input[name=templateName]").value;
        const numberInput = e.target.querySelector("input[name=templatePrice]").value;
        if (!nameInput) return alert("템플릿 이름을 정확히 입력해 주세요!");
        if (!numberInput) return alert("가격을 정확하게 입력해 주세요!.");

        //TODO: 서버로 수정 요청 보내는 Requecer 작성 필요
        dispatch({
            type:REQUEST_UPDATE_TEMPLATE,
            data:{
                newName: nameInput,
                newPrice: numberInput
            }
        })


    }, []);

    const onClickNoneShow = useCallback((t) => {
        currentTemplate.current!.style.display = "block";
        currentTemplateSibling.current!.style.display = "none";
    }, []);


    return (
        <TemplateBlock>
            {botTemplates.map(t => {
                return (
                    <TemplateItem key={t._id}>
                        <TemplateItemHeader/>
                        <TemplateItemForm style={{display: "none"}} onSubmit={onSubmitFix}>
                            <p>
                                <TemplateItemLabel htmlFor={`name-${t._id}`}>템플릿 이름</TemplateItemLabel><br/>
                                <TemplateItemInput id={`name-${t._id}`} placeholder={t.name} name={"templateName"}/>
                            </p>
                            <p>
                                <TemplateItemLabel htmlFor={`price-${t._id}`}>템플릿 가격</TemplateItemLabel><br/>
                                <TemplateItemInputNumber id={`price-${t._id}`} placeholder={t.price!.toString()}
                                                         name={"templatePrice"}/>
                            </p>
                            <p>
                                <TemplateItemButton cancel onClick={() => onClickNoneShow(t)}>취소</TemplateItemButton>
                                <TemplateItemButton>수정</TemplateItemButton>
                            </p>
                        </TemplateItemForm>
                        <TemplateItemBody onClick={(e) => {
                            onClickItem(e, t)
                        }} url={t.imageUrl ? t.imageUrl : "/images/test.jpg"}>
                            {t.name}
                        </TemplateItemBody>
                        <TemplateItemFooter/>
                    </TemplateItem>
                )
            })}
        </TemplateBlock>
    )
};

export default Template