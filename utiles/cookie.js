export const setCookie = (key, value, days) => {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    const cookieValue = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
    document.cookie = key + '=' + cookieValue;
};
export const getCookie = (cookie_name, cookieStr) => {
    if (!cookieStr) return false;
    const cookieArr = cookieStr.split(';');
    let x, y;
    for (let i = 0; i < cookieArr.length; i++) {
        x = cookieArr[i].substr(0, cookieArr[i].indexOf('='));
        y = cookieArr[i].substr(cookieArr[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        if (x === cookie_name) {
            return unescape(y); // unescape로 디코딩 후 값 리턴
        }
    }
};