import React, {useState} from "react";

function MessageTelautograph() {
    // 빈 문자열로 시작하며, 입력란과 미리보기가 같은 상태를 사용함
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        // e는 변경 이벤트 객체, target은 입력 요소, value는 변경된 입력 문자열임
        setMessage(e.target.value);
    };

    function btnClick() {
        // 현재 메시지를 표시하고, 사용자가 알림창을 닫으면 아래 초기화로 진행함
        alert(message);
        // 상태를 비우면 value로 연결된 입력란과 미리보기가 함께 비워짐
        setMessage('');
    }

    return (
        <div>
            <h1>메시지 전송기</h1>
            {/* 제어 입력: value는 상태를 읽고 onChange는 사용자 입력을 상태에 반영함 */}
            <input type="text" placeholder="메시지를 입력하세요" value={message} onChange={handleChange}/>
            {/* btnClick()으로 호출하지 않고 함수 자체를 전달하여 클릭할 때 실행함 */}
            <button onClick={btnClick}>전송</button>
            <p>미리보기: {message}</p>
        </div>
    );
}

export default MessageTelautograph;