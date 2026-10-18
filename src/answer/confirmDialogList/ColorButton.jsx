import React from "react";

function ColorButton(props) {
    // 아래 주석은 인라인 스타일 대안임. JSX의 style은 문자열 대신 객체를 받음
    // style={{...}}의 바깥 {}는 JSX 표현식이고 안쪽 {}는 객체 리터럴임
    return (
        // <button style={{color: 'white', background: `${props.color}`}}>
        //     <b>{props.children}</b>
        // </button>
        // color가 green이면 bg-green 클래스가 되어 CSS의 .bg-green 규칙이 적용됨
        <button className={`bg-${props.color}`}>
            {/* 전달받은 버튼 문구를 굵게 표시함. 이 예제에는 클릭 처리 함수가 없음 */}
            <b>{props.children}</b>
        </button>
    );
}

export default ColorButton;