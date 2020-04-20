import styled from "styled-components";
export const SideBlock = styled.aside`
    height: 100vh;
    background-color:rgb(6,27,50);
    width: 200px;
    @media all and (max-width:500px) {
        
        &{
            width:100px;
            z-index:10004;
        };
        &:hover{
            transition: width 0.5s;
            width:200px;
            z-index:10004;
            position:fixed;
        };
    };
`;
