import * as React from "react";
import {useState, useEffect, useCallback, FunctionComponent, useMemo, useRef} from "react";
import * as Styles from "./styles";

import {CardSizeTypes, CardTypes} from "./index.d";


const Card: FunctionComponent<CardTypes> = ({auth = "Geonil Jang", title = "당신의 재능을 팔아보세요!", label = "생각의 전환", text = "누구도 생각하지 못했던 자신만의 아이디어를 팔아 보세요", point = 0, size: s = "s", direction = "column"}) => {
    const [size, setSize] = useState<CardSizeTypes[keyof CardSizeTypes]>(s === "s" ? 160 : s === "m" ? 240 : 320);
    const [count, setCount] = useState<boolean[]>([]);
    const [showText, setShowText] = useState<boolean>(true);
    const [showFooter, setShowFooter] = useState<boolean>(true);
    const [myPoint, setMyPoint] = useState<number>(point);

    //utils
    const ballCount = useMemo(() => (p: number) => {
        return Array(5).fill(false).map((e, i) => {
            return i < p;
        })
    }, []);

    useEffect(() => {
        setCount(ballCount(point));
        setSize(s === "s" ? 160 : s === "m" ? 240 : 320);
    }, [point, s]);

    return (
        <div style={{width:"100%"}} id={"cardBlock"}>
            <Styles.MyCard size={size} direction={direction}>
                <Styles.MyImg src={"/images/test.jpg"} size={size}/>
                <Styles.MyContents size={size}>
                    {direction === "column" && (<Styles.MyContentHeader>{label}</Styles.MyContentHeader>)}
                    <Styles.MyContentBody size={size} direction={direction}>
                        {direction === "column" ? title : text}
                    </Styles.MyContentBody>
                    {showFooter && myPoint >= 0 && (
                        <Styles.MyContentFooter>
                            <Styles.FooterBlock>
                                {count.map((b, i) => <Styles.Ball key={i} myPoint={b}/>)} {direction === "row" &&
                            <div style={{marginLeft: "15px"}}>| {auth}</div>}
                            </Styles.FooterBlock>
                            {direction === "column" && showText &&
                            <Styles.FooterBlock><Styles.FooterSpan>{text}</Styles.FooterSpan></Styles.FooterBlock>}
                        </Styles.MyContentFooter>
                    )}
                </Styles.MyContents>
            </Styles.MyCard>
        </div>
    )
};

export default Card