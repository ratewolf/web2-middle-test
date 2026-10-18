import {useState} from "react";

// use로 시작하는 사용자 정의 훅: 상태와 변경 로직을 컴포넌트 밖에서 재사용함
// initialValue는 최초 인원, MAX_CAPACITY는 최대 인원이며, 호출마다 독립된 상태를 가짐
function useCounter(initialValue, MAX_CAPACITY) {
    // initialValue는 최초 상태에 사용됨. 인수가 바뀐다고 상태가 자동 초기화되지는 않음
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => {
        // 콜백의 count는 이전 업데이트가 반영된 상태값이며, Math.min으로 상한을 제한함
        setCount((count) => Math.min(MAX_CAPACITY, count + 1));
    };

    const decreaseCount = () => {
        // 이전 상태에서 1을 빼되 Math.max로 최솟값을 0으로 제한함
        setCount((count) => Math.max(0, count - 1));
    };

    // 호출한 쪽은 배열 구조 분해로 같은 순서의 상태값과 함수들을 꺼내 사용함
    return [count, increaseCount, decreaseCount];
}

export default useCounter;