import React, {useState} from "react";

function Accommodate() {
    const MAX_CAPACITY = 20;
    const [count, setCount] = useState(0);

    const btnIncreaseCount = () => {
        setCount((count) => Math.min(MAX_CAPACITY, count + 1));
    };

    const btnDecreaseCount = () => {
        setCount((count) => Math.max(0, count - 1));
    };

    return (
        <div>
            <h1>현재 수용인원: {count}/{MAX_CAPACITY}</h1>
            <button onClick={btnIncreaseCount} disabled={count >= MAX_CAPACITY}>수용시설에 입장</button>
            <button onClick={btnDecreaseCount} disabled={count <= 0}>수용시설에서 퇴장</button>
            {count >= MAX_CAPACITY && <p>수용시설에 정원이 가득 찼습니다.</p>}
            {/*{userCount >= MAX_CAPACITY ? <p>수용시설에 정원이 가득 찼습니다.</p> : null*/}
        </div>
    );
}

export default Accommodate;