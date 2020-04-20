import styled from 'styled-components';

export const MyForm = styled.form`
  margin-top:100px;
  display:flex;
  width:650px;
  position: relative;
`;

interface MyInputDates {
    disabled?: boolean;
    readOnly ?:boolean;
}
export const MyInput = styled.textarea.attrs({
    maxlength: 500
})<MyInputDates>`
    width:650px;
    height: 100px;
    resize: none;
    box-sizing:border-box;  
    font-size: ${props=>props.readOnly ? '1.3rem' : '1.2rem'};
    color: ${props=>props.readOnly && '#c2255c'};
    padding:6px;
    padding-right: 30px;
    border-radius:5px;
    background-color: ${props => props.disabled && '#e9ecef'};
`;

export const MyButton = styled.button`
  width: 100px;
  height: 100px;
  margin-left:3px;
  border-radius:15px;
  background:#3bc9db;
  font-size: 1.5rem;
  color: whitesmoke;
  border:0;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background-color: #66d9e8;
  }
`;

export const MyCount = styled.span`
  position: absolute;
  left: 600px;
  bottom: 0;
  color:#adb5bd;
`;


export const MyRadio = styled.input.attrs({
    type: 'radio'
})`
    margin-left: 15px;
`;