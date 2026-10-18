import React, {useState} from "react";

function Accommodate() {
    // 수용시설의 최대 정원을 20명으로 설정
    const MAX_CAPACITY = 20;
    // useState(0): count의 초기값을 0으로 설정
    // count: 현재 상태값(수용 인원)
    // setCount: count를 변경하는 상태 업데이트 함수
    // 상태가 변경되면 React가 컴포넌트를 다시 렌더링함
    const [count, setCount] = useState(0);

    // 입장 버튼을 클릭했을 때 실행되는 함수
    const btnIncreaseCount = () => {
        // 함수형 업데이트 방식
        // setCount에 새로운 값을 직접 전달하는 대신
        // 이전 상태를 받아 새로운 상태를 계산하는 함수를 전달함
        //
        // 매개변수 count는 React가 전달하는 이전 상태값
        // 매개변수 이름은 prevCount 등으로 자유롭게 변경 가능
        //
        // setCount(count + 1)로 작성해도 동작하지만,
        // 함수형 업데이트는 여러 상태 업데이트가 연속 발생해도
        // 이전 업데이트 결과를 반영하여 계산할 수 있음
        // Math.min은 두 값 중 작은 값을 반환하므로 최대 정원 20을 넘지 않음
        setCount((count) => Math.min(MAX_CAPACITY, count + 1));
    };

    // 퇴장 버튼을 클릭했을 때 실행되는 함수
    const btnDecreaseCount = () => {
        // 이전 상태에서 1을 빼는 함수형 업데이트
        // Math.max는 두 값 중 큰 값을 반환하므로 0보다 작아지지 않음
        setCount((count) => Math.max(0, count - 1));
    };

    return (
        <div>
            {/* JSX에서 {}는 JavaScript 표현식을 사용하는 문법 */}
            {/* count와 MAX_CAPACITY의 값을 화면에 표시함 */}
            <h1>현재 수용인원: {count}/{MAX_CAPACITY}</h1>

            {/* onClick: 버튼 클릭 시 실행할 함수를 지정 */}
            {/* disabled: 조건이 true이면 버튼을 비활성화 */}
            {/* 정원이 20명 이상이면 더 이상 입장할 수 없음 */}
            <button onClick={btnIncreaseCount} disabled={count >= MAX_CAPACITY}>수용시설에 입장</button>
            {/* 현재 인원이 0명 이하이면 퇴장 버튼 비활성화 */}
            <button onClick={btnDecreaseCount} disabled={count <= 0}>수용시설에서 퇴장</button>

            {/*
                && 연산자를 이용한 조건부 렌더링

                JavaScript의 && 연산자는
                왼쪽이 falsy이면 왼쪽 값을 반환하고,
                truthy이면 오른쪽 값을 반환함

                count >= MAX_CAPACITY가 true이면
                오른쪽의 <p> 요소가 반환되어 화면에 표시됨

                false이면 전체 표현식이 false가 되고,
                React는 false를 화면에 렌더링하지 않음

                따라서 정원이 가득 찼을 때만 경고문이 나타남
            */}
            {count >= MAX_CAPACITY && <p>수용시설에 정원이 가득 찼습니다.</p>}

            {/*
                위의 && 연산자는 삼항 연산자로도 작성할 수 있음

                조건 ? 참일 때 : 거짓일 때

                삼항 연산자는 참과 거짓일 때 각각 다른 내용을
                표시하고 싶을 때 주로 사용함

                아래 예제는 위와 똑같은 실행 결과를 보여줌.
            */}
            {/* {count >= MAX_CAPACITY ? <p>수용시설에 정원이 가득 찼습니다.</p> : null} */}
        </div>
    );
}

export default Accommodate;