import styled from "styled-components";

export const TemplateMake = styled.div`
  width: 100%;
  height: 100%;
  background-color: coral;
  display: flex;
  flex-direction:column;
`;

//preview
export const preViewBlock = styled.div`
    height: 50%;
    width: 100%;    
    background-color: skyblue;
    overflow:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//setting
export const settingBlock = styled.form`
    height: 50%;
    width: 100%;    
    background-color: palevioletred;
    display: flex;
    text-align:center;
    overflow: auto;
`;
export const settingBlockDiv = styled.div`
    height: 100%;
    width: 100%;
    overflow:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`;

export const settingInput = styled.input.attrs({
    maxLength: 10
})`
  resize:none;
  width:320px;
  font-size:1rem;
  height: 1.6rem;
  line-height: 1.6rem;
  border-radius:5px 5px 0 0 ;
  padding-left:5px;
  box-sizing: border-box;
  border:none;
`;
export const settingText = styled.textarea.attrs({
    rows: 10,
    maxLength: 140
})`
  width:320px;
  font-size: 1rem;
  resize:none;
  padding-left: 5px;
  box-sizing: border-box;
  border:1px solid darkgray;
  outline: none;
`;
export const settingButton = styled.button`
  width:320px;
  height:30px;
  border-radius:0 0 15px 15px;
  box-sizing: border-box;
  border:none;
  
`;

export const settingsItem = styled.p`
  height: 20%;
  background-color: palevioletred;
  margin:0;

`;

//util
export const settingRange = styled.input.attrs({
    type: 'range',
    min: '0',
    max: '5',
    step: '1'
})`
    //margin-left: 15px;
`;
export const settingRadio = styled.input.attrs({
    type: 'radio'
})`
    //margin-left: 15px;
`;