import styled from "styled-components";

interface CardSize {
    size: 160 | 240 | 320;
    direction?: "row" | "column";
}


export const MyCard = styled.div<CardSize>`
  display: flex;
  flex-direction: ${props => props.direction};
  width: ${props => props.direction === "row" ? (props.size * 2.7)+"px" : props.size+"px"  };
  height: ${props => props.direction === "row" ? props.size+"px" : (props.size * 1.7)+"px"};
  background-color:darkcyan;
`;


export const MyImg = styled.img<CardSize>`
  width: ${props => props.size+"px"};
  height: ${props => props.size+"px"};
  border-bottom: 0;
`;
export const MyContents = styled.div<CardSize>`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color:rosybrown;
  
`;
export const MyContentHeader = styled.div`
  //height: 20%;
  width:100%;
  background-color: #5f3dc4;
  flex-basis: 20%;
`;
export const MyContentBody = styled.div`
  //height: 45%;
  padding-left: 10px;
  padding-top:5px;
  flex-basis: 80%;
  overflow: auto;
  background-color: #845ef7;
  font-size: 1.1rem;
`;
export const MyContentFooter = styled.div`
  //height: 35%;
  flex-basis: 35%;
  background-color: #e5dbff;
  display: flex;
  flex-direction: column;
`;

export const FooterBlock = styled.div`
  flex-basis: 100%;
  margin-left: 5px;
  display: flex;
  align-items:center;
`;

export const FooterSpan = styled.span`
  display:inline-block;
  height:1.1rem;
  overflow: hidden;
`;

interface BallPoint {
    myPoint:boolean
}
export const Ball = styled.span<BallPoint>`
  border-radius: 50%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.myPoint ? 'sandybrown' :"#eee"};
`;

export const MyRadio = styled.input.attrs({
    type: 'radio'
})`
    margin-left: 15px;
`;
export const MyCheck = styled.input.attrs({
    type: 'checkbox'
})`
    margin-left: 15px;
`;
export const MyRange = styled.input.attrs({
    type: 'range',
    min:'0',
    max:'5',
    step:'1'
})`
    margin-left: 15px;
`;