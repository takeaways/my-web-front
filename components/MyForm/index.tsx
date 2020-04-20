import * as React from 'react';
import {useState, useRef, useEffect, useCallback, FunctionComponent, FormEvent, useMemo} from "react";
import * as Styles from "./styles";
import {FormData, UseAgeTypes} from './index.d';

const MaxTextLength = 500;

const Form: FunctionComponent<FormData> = ({target}) => {

    //states
    const [text, setText] = useState<string>("Hello, this is Geonil Jang");
    const [count, setCount] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    //useAge states
    const [disabled, setDisabled] = useState<boolean>(false);
    const [readOnly, setReadOnly] = useState<boolean>(false);

    //refs
    const myTextArea = useRef<HTMLTextAreaElement>(null);
    const myCount = useRef<HTMLSpanElement>(null);

    //text area utils
    const resetLength = useMemo(() => () => {
        if (myCount.current) myCount.current.style.left = "600px";
        if (myTextArea.current) myTextArea.current.style.width = "650px";
    }, []);
    const setLength = useMemo(() => () => {
        if (myTextArea.current) {
            myTextArea.current.style.width = "550px";
            if (myCount.current) {
                myCount.current.style.left = "500px";
            }
        }
    }, []);

    //event handlers
    const onClickedType = useCallback((type: UseAgeTypes) => {
        resetLength();
        switch (type) {
            case "default": {
                setDisabled(false);
                setReadOnly(false);
                break;
            }
            case "disabled": {
                setDisabled(true);
                setReadOnly(false);
                setShow(false);
                break;
            }
            case "readonly": {
                setDisabled(false);
                setReadOnly(true);
                setShow(false);
            }
        }
    }, []);

    const onChange = useCallback((e) => {
        setCount(MaxTextLength - e.target.value.length);
        setText(e.target.value);
    }, []);

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        console.log(`입력된 텍스트 서버로 전달 값 : ${text}`);
        console.log(`서버로 전송할 데이터의 주소  : ${target}`);
        setShow(false);
        resetLength();
    }, [text]);

    useEffect(() => {
        setCount(MaxTextLength - text.length); //초기 입력값이 있을 경우. 카운트를 계산.
        if (myTextArea.current) {
            myTextArea.current.addEventListener('input', (e) => {
                if (!disabled && !readOnly) {
                    setShow(true);
                    setLength();
                }
            })
        }
    }, [disabled, readOnly]);


    return (
        <>
            <Styles.MyForm onSubmit={onSubmit}>
                <Styles.MyInput ref={myTextArea} value={text} onChange={onChange} maxLength={500} readOnly={readOnly}
                                disabled={disabled} placeholder={"텍스트를 입력해주세요..."}/>
                {show && <Styles.MyButton>저장</Styles.MyButton>}
                <Styles.MyCount ref={myCount}>{text ? `${count}` : 500}</Styles.MyCount>
            </Styles.MyForm>
            <p>
                <label><Styles.MyRadio name={'useAge'} onClick={() => onClickedType('default')}
                                       defaultChecked/>Defaul</label>
                <label><Styles.MyRadio name={'useAge'} onClick={() => onClickedType('disabled')}/>Disabled</label>
                <label><Styles.MyRadio name={'useAge'} onClick={() => onClickedType('readonly')}/>Readonly</label>
            </p>
        </>
    )
};


export default Form;