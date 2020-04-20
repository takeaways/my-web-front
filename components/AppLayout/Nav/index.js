import React from "react";
import Link from "next/link";
import {
    NavBlock, NavLink,
    NavListItem,
    NavListItemMenu,
    NavListItemMenuItem,
    NavListItemMenuItemMenu,
} from "./styles";
import {useSelector} from "react-redux";

const navItem = [
    {
        mainMenu: "홈으로",
        subMenu: [{
            name: "home",
            path: "/"
        }]
    },
    {
        mainMenu: "카드 만들기",
        subMenu: [
            {
                name: "Make",
                path: "make"
            },
            {
                name: "Test",
                path: "setting"
            }]
    },
    {
        mainMenu: "About",
        subMenu: [
            {
                name: "#",
                path: "#"
            },
            {
                name: "#",
                path: "#"
            }]
    },
    {
        mainMenu: "회원정보",
        subMenu: [
            {
                name: "로그인",
                path: "/user"
            },
            {
                name: "회원가입",
                path: "/user"
            },
            {
                name: "로그아웃",
                path: "#"
            }]
    }
];

const Nav = () => {
    const auth = useSelector(state => state.user.auth);
    return (
        <NavBlock className="naveBar">
            {navItem.map(item => (
                    <NavListItem key={item.mainMenu}>
                        <NavListItemMenu className={"navList"}>{item.mainMenu}
                            <NavListItemMenuItem>
                                {item.subMenu.map(sub => {
                                    if (auth && auth.email && (sub.name === "회원가입" || sub.name === "로그인")) {
                                    } else if (auth && auth.email && sub.name === "로그아웃") {
                                        return (
                                            <NavListItemMenuItemMenu key={sub.name}>
                                                <Link href={sub.path}><NavLink>{sub.name}</NavLink></Link>
                                            </NavListItemMenuItemMenu>
                                        )
                                    } else {
                                        if (sub.name !== "로그아웃") {
                                            return (
                                                <NavListItemMenuItemMenu key={sub.name}>
                                                    <Link href={sub.path}><NavLink>{sub.name}</NavLink></Link>
                                                </NavListItemMenuItemMenu>
                                            )
                                        }
                                    }
                                })}
                            </NavListItemMenuItem>
                        </NavListItemMenu>
                    </NavListItem>
                )
            )}
        </NavBlock>
    )
};
export default Nav