import styled from "styled-components";
export const ContentBlock = styled.div`
  width: 100%;
  //background-color: #00B7FF;
 
`;
export const ContentHeader = styled.div`
  height: 100px;
  background-color: #00B7FF;
`;
export const ContentBody = styled.section`
  height: calc(100vh - 150px);
  background-color:sandybrown;
  z-index:10;
  position: relative;
`;
export const ContentFooter = styled.div`
  height: 50px;
  background-color: #ddd;
  position: relative;
  text-align: center;
  line-height:50px;
  color:#eee;
  //z-index:10;
`;

export const ContentItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const MakeNewTamplateButton = styled.div`
  width: 49px;
  height: 49px;
  margin-left: 12px;
  color:darkmagenta;
  text-align: center;
  line-height: 55px;
  font-size: 3rem;
  transition:transform 1s;
  &:hover{
    cursor:pointer;
    transform: rotate(0.125turn);
  }
`;

export const MakeNewTemplateBlock = styled.div`
  width: 100%;
  height: 100%;
  // background-color: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MakeNewTemplateForm = styled.form`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  //background-color: palevioletred;
`;

