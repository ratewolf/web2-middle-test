import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

function Accommodate() {
    const MAX_CAPACITY = 20;

    const [count, increaseCount, decreaseCount] = useCounter(0, MAX_CAPACITY);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current Count Value: ${count}`);
    }, [count]);

    return (
        <div>
            <h1>현재 수용인원: {count}/{MAX_CAPACITY}</h1>
            <button onClick={increaseCount} disabled={isFull}>수용시설에 입장</button>
            <button onClick={decreaseCount} disabled={count === 0}>수용시설에서 퇴장</button>
            {count >= MAX_CAPACITY && <p>수용시설에 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;