import React, {useState} from "react";

function ToggleFunction(props) {
    // true로 시작하므로 최초 버튼 문구는 켜짐
    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleClick() {
        // 콜백의 인수는 이전 상태이며, ! 연산자는 true와 false를 서로 반전함
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        // handleClick()이 아니라 함수 자체를 전달해야 렌더링 중 실행되지 않음
        <button onClick={handleClick}>
            {/* 조건 ? 참일 때 값 : 거짓일 때 값 형태의 삼항 연산자 */}
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    );
}

export default ToggleFunction;