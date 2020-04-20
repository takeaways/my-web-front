import * as React from "react";
import {useState, useEffect, useCallback, FunctionComponent, useMemo, useRef} from "react";
import * as Styles from "./styles";

import {CardSizeTypes, CardTypes} from "./index.d";

const Card: FunctionComponent<CardTypes> = ({auth = "Geonil Jang", title = "당신의 재능을 팔아보세요!", label = "생각의 전환", text = "누구도 생각하지 못했던 자신만의 아이디어를 팔아 보세요", point = 0, size: s = "s", direction = "column"}) => {
    const [size, setSize] = useState<CardSizeTypes[keyof CardSizeTypes]>(s === "s" ? 160 : s === "m" ? 240 : 320);
    const [dir, setDir] = useState<("row" | "column")>(direction);
    const [count, setCount] = useState<boolean[]>([]);
    const [showText, setShowText] = useState<boolean>(true);
    const [showFooter, setShowFooter] = useState<boolean>(true);
    const [myPoint, setMyPoint] = useState<number>(point);

    //refs
    const foorterRef = useRef<HTMLInputElement>(null);


    //event handlers
    const onSizeChange = useCallback((s) => {
        switch (s) {
            case "s":
                setSize(160);
                break;
            case "m":
                setSize(240);
                break;
            case "l":
                setSize(320);
                break;
        }
    }, []);
    const onDirectionChange = useCallback((d) => {
        switch (d) {
            case "row":
                setDir("row");
                break;
            case "column":
                setDir("column");
                break;
        }
    }, []);
    const onShowText = useCallback(() => {
        setShowText(pre => !pre)
    }, []);
    const onShowFooter = useCallback(() => {
        if (dir === "column") {
            setShowFooter(pre => !pre)
        }
    }, [dir]);
    const onChangeMyPoint = useCallback((e) => {
        setCount(ballCount(e.target.value));
        setMyPoint(e.target.value);
    }, []);

    //utils
    const ballCount = useMemo(() => (p: number) => {
        return Array(5).fill(false).map((e, i) => {
            return i < p;
        })
    }, []);

    useEffect(() => {
        setCount(ballCount(point));
        if (dir === "row") {
            setShowFooter(true);
            if (foorterRef.current) foorterRef.current.checked = true;
        }
    }, [dir]);

    return (
        <>
            <Styles.MyCard size={size} direction={dir}>
                <Styles.MyImg src={"/images/test.jpg"} size={size}/>
                <Styles.MyContents size={size}>
                    {dir === "column" && (<Styles.MyContentHeader>{label}</Styles.MyContentHeader>)}
                    <Styles.MyContentBody>
                        {dir === "column" ? title : text}
                    </Styles.MyContentBody>
                    {showFooter && myPoint >= 0 && (
                        <Styles.MyContentFooter>
                            <Styles.FooterBlock>
                                {count.map((b, i) => <Styles.Ball key={i} myPoint={b}/>)} {dir === "row" &&
                            <div style={{marginLeft: "15px"}}>| {auth}</div>}
                            </Styles.FooterBlock>
                            {dir === "column" && showText &&
                            <Styles.FooterBlock><Styles.FooterSpan>{text}</Styles.FooterSpan></Styles.FooterBlock>}
                        </Styles.MyContentFooter>
                    )}
                </Styles.MyContents>
            </Styles.MyCard>
            <p key={"별요점 "}>
                <b>[1] 별점을 조절해 보세요 {myPoint}</b><br/>
                <Styles.MyRange value={myPoint} onChange={onChangeMyPoint}/>
            </p>
            <p key={"사이즈 "}>
                <b>[1] 카드의 사이즈를 조절해 보세요!</b><br/>
                <label><Styles.MyRadio name={"cardSize"} onClick={() => onSizeChange("s")} defaultChecked/>Small</label>
                <label><Styles.MyRadio name={"cardSize"} onClick={() => onSizeChange("m")}/>Medium</label>
                <label><Styles.MyRadio name={"cardSize"} onClick={() => onSizeChange("l")}/>Large</label>
            </p>
            <p key={"방향 정하기 "}>
                <b>[1] 카드의 방향을 정해 보세요!</b><br/>
                <label><Styles.MyRadio name={"cardDirection"} onClick={() => onDirectionChange("row")} defaultChecked/>Row</label>
                <label><Styles.MyRadio name={"cardDirection"}
                                       onClick={() => onDirectionChange("column")}/>Coloumn</label>
            </p>
            <p>
                <b>[1] Row 상태에서는 별점 아래 테스트는 보이지 않습니다. (주의: 별이 보이는 상태에서만 텍스트가 보입니다.)</b><br/>
                <b>[2] Column 상태에서는 별점은 무조건 보이도록 처리 했습니다.</b><br/>
                <label><Styles.MyCheck defaultChecked onClick={onShowText}/>showText</label>
                <label><Styles.MyCheck ref={foorterRef} defaultChecked onClick={onShowFooter} disabled={dir === "row"}/>showPoint</label>
            </p>


        </>
    )
};

export default Card