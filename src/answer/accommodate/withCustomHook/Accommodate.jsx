import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

function Accommodate() {
    const MAX_CAPACITY = 20;

    // 훅이 반환하는 배열에서 현재 인원과 입장·퇴장 함수를 순서대로 꺼냄
    const [count, increaseCount, decreaseCount] = useCounter(0, MAX_CAPACITY);
    // 정원에 도달했는지를 저장하는 불리언 상태. 초기 인원은 0명이므로 false
    const [isFull, setIsFull] = useState(false);

    // 마운트 후 실행되고, 이후 count가 바뀐 렌더링이 반영되면 다시 실행됨
    // [count]는 의존성 배열이며, 인원 변경에 맞춰 버튼 상태와 로그를 갱신함
    // 이 예제는 파생값을 별도 상태로 저장하지만 count >= MAX_CAPACITY로 직접 계산할 수도 있음
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current Count Value: ${count}`);
    }, [count]);

    return (
        <div>
            {/* JSX의 {} 안에서 현재 상태와 최대 정원을 화면에 표시함 */}
            <h1>현재 수용인원: {count}/{MAX_CAPACITY}</h1>
            {/* 함수 자체를 전달해야 클릭할 때 실행됨. disabled가 true이면 클릭할 수 없음 */}
            <button onClick={increaseCount} disabled={isFull}>수용시설에 입장</button>
            <button onClick={decreaseCount} disabled={count === 0}>수용시설에서 퇴장</button>
            {/* 비교 결과가 true일 때만 안내 문구를 렌더링함 */}
            {count >= MAX_CAPACITY && <p>수용시설에 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;