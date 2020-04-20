import styled, { StyledComponent } from 'styled-components';



export const TemplateBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  //background-color: brown;
  flex-wrap: wrap;
  overflow: auto;

`;

export const TemplateItem = styled.div`
  width:250px;
  height: 250px;
  background-color: brown;
  border:1px solid red;
  border-radius: 18px;
  margin: 18px;
  // transition:all 1.5s;
  
  &:hover{
    box-shadow: 5px 5px 5px 5px gray;
    cursor:pointer;
    // transform: rotateY(180deg);
    // visibility: hidden;
  }
`;

export const TemplateItemHeader = styled.div`
  height: 40px;
  background-color: palevioletred;
  border-radius: 18px 18px 0 0;
`;

interface Img {
  url?: string
}
export const TemplateItemBody = styled.div<Img>`
  height: 170px;
  //background-color: cornflowerblue;
  text-align: center;
  line-height: 170px;
  background-image: url(${props => props.url});
  background-size:100% 170px;
  
`;

export const TemplateItemFooter = styled.div`
  height: 40px;
  background-color: darkorange;
  border-radius: 0 0 18px 18px ;
`;

export const TemplateItemForm = styled.form`
    height: 170px;
    background-color: cornflowerblue;
    text-align: center;
    overflow:auto
`;

export const TemplateItemLabel = styled.label`
  color:white;
`;


const ItemInput = styled.input`
  border-radius:5px;
  font-size:1.2rem;
`

export const TemplateItemInput = styled(ItemInput)`
 
`;

export const TemplateItemInputNumber = styled(ItemInput).attrs({
  type: 'number',
})`
  
`;

interface ButtonPropsType {
  cancel?: boolean;
}

export const TemplateItemButton = styled.button<ButtonPropsType>`
  border-radius:5px;
  background:${props => props.cancel ? "red" : "blue"};
  color:white;
  margin:0 2px;
`;