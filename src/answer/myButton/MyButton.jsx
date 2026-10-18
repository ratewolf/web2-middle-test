import React, {useState} from "react";

function MyButton() {
    // 첫 클릭에서 전달할 번호는 1. 이후 클릭할 때마다 다음 번호를 준비함
    const [count, setCount] = useState(1);

    const btnClick = (id, event) => {
        // id는 호출한 쪽에서 전달한 번호, target은 실제 클릭한 요소임
        // React 이벤트에서 x, y는 제공되지 않아 undefined일 수 있음
        // 좌표가 필요할 때는 clientX/clientY 등을 사용하지만, 여기서는 원본 코드를 관찰함
        console.log(id, event.target, event.x, event.y);
    }

    return (
        // 화살표 함수로 감싸 클릭 이벤트 객체를 받고 추가 인수 count도 함께 전달함
        <button onClick={(event) => {
            // 이전 상태로 다음 값을 계산함. 현재 핸들러 안의 count를 즉시 바꾸지는 않음
            setCount((count) => count + 1);
            // 이 렌더링의 count를 읽으므로 첫 클릭은 1, 다음 클릭은 2가 출력됨
            btnClick(count, event);
        }}>
            버튼을 클릭하세요. (결과를 보려면 개발자 도구(F12) 실행)
        </button>
    );
}

export default MyButton;