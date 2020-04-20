import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {UserBlock, UserLogInForm, UserSignUpForm} from './styles'
import {Button, Input, InputBlock, InputLabel} from "../globalSyleComponents";
import {REQUEST_AUTH_LOGIN} from "../../constants/actionNames";

const UserPage = () => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const onChangeId = useCallback((e) => setUserId(e.target.value), []);
    const onChangePw = useCallback((e) => setUserPw(e.target.value), []);
    const onLogIn = useCallback((e) => {
        e.preventDefault();
        if(!userId.trim() || !userPw.trim()){
            return alert("입력값이 정상적이지 않습니다.")
        }
        dispatch({
            type:REQUEST_AUTH_LOGIN,
            data:{
                email:userId,
                code:userPw
            }
        })
    }, [userId, userPw]);

    return (
        <UserBlock className={'userForm'}>
            <UserLogInForm onSubmit={onLogIn}>
                <InputBlock>
                    <InputLabel htmlFor={"id"}>아이디 : </InputLabel>
                    <Input id={"id"} onChange={onChangeId}/>
                </InputBlock>
                <InputBlock>
                    <InputLabel htmlFor={"pw"}>인증키 : </InputLabel>
                    <Input type={"password"} id={"pw"} onChange={onChangePw}/>
                </InputBlock>
                <InputBlock>
                    <Button type={"submit"}>로그인</Button>
                </InputBlock>
            </UserLogInForm>
            <UserSignUpForm>
                <InputBlock>
                    <InputLabel htmlFor={"s-id"}>이메일 : </InputLabel>
                    <Input id={"s-id"}/>
                </InputBlock>
                <InputBlock>
                    <InputLabel htmlFor={"s-pw"}>인증키 : </InputLabel>
                    <Input id={"s-pw"}/>
                </InputBlock>
                <InputBlock>
                    <Button primary>어드민 등록</Button>
                </InputBlock>
            </UserSignUpForm>
        </UserBlock>
    )
};

export default UserPage