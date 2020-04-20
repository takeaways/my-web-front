import styled from "styled-components";

export const NavBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color:#eee;
  display: flex;
  justify-content: space-around;
  align-items:flex-start;
`;

export const NavListItem = styled.ul`
  // background-color: #00B7FF;
  
  padding: 0;  
`;

export const NavListItemMenu = styled.li`
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  &:hover {
    & > ul {
      opacity: 1;
      display: block;
      z-index: 10004;
      visibility: visible;
    }
  }
`;

export const NavListItemMenuItem = styled.ul`
    transition: opacity 0.5s ease-in-out;
    //display: none;
    visibility: hidden;
    opacity: 0;
    padding: 10px;    
    position: absolute;
    background-color:rgba(0,0,0,0.5);
    border-radius:3px;
    width: 100px;
    z-index: 10004;
`;

export const NavListItemMenuItemMenu = styled.li`
    list-style: none;
    margin-top:6px;
    margin-bottom:6px;
    color:white;
    &:hover{
      cursor:pointer;
      text-decoration: underline;
    }    
`;

export const NavLink = styled.span`
  color:white;
`;
