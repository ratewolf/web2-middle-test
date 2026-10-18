import React, {useEffect, useState} from "react";

function Clock() {
    /*
        useState(() => new Date())

        nowTime: 현재 시간을 저장하는 상태 변수
        setNowTime: nowTime을 변경하는 상태 업데이트 함수

        new Date(): 현재 날짜와 시간을 담은 Date 객체 생성

        useState(new Date())로 작성해도 되지만,
        이 경우 컴포넌트가 렌더링될 때마다
        new Date() 표현식이 평가됨
        (초기 렌더링 이후에는 초기값으로 사용되지 않음)

        useState(() => new Date())는 초기화 함수를 전달하는 방식

        React가 최초 상태를 초기화할 때
        이 함수를 호출하여 반환값을 초기 상태로 사용함

        따라서 불필요한 초기값 계산을 피할 수 있음

        ※ 개발 환경의 StrictMode에서는 초기화 함수를
           두 번 호출할 수도 있음
    */
    const [nowTime, setNowTime] = useState(() => new Date());

    /*
        useEffect: 렌더링 이후 외부 시스템과 동기화하거나
        타이머 등의 작업을 설정할 때 사용하는 React Hook

        기본 형태:
        useEffect(() => {
            실행할 작업
            return () => { 정리할 작업 };
        }, [의존성]);

        의존성 배열에 따른 차이

        1. useEffect(fn)
           → 매 렌더링 이후 실행

        2. useEffect(fn, [])
           → 마운트 시 실행
           → 일반적인 재렌더링에서는 다시 실행되지 않음

        3. useEffect(fn, [nowTime])
           → 마운트 시 실행
           → 이후 nowTime이 변경되면 다시 실행

        여기서는 빈 배열 []을 사용했기 때문에
        컴포넌트가 마운트될 때 타이머를 등록함

        ※ StrictMode 개발 환경에서는
           Effect의 설정과 정리가 추가로 실행될 수 있음
    */
    useEffect(() => {
        /*
            setInterval(함수, 시간)

            지정한 시간 간격마다 함수를 반복 실행함

            1000ms = 1초

            1초마다 new Date()로 현재 시간을 생성하고
            setNowTime으로 상태를 업데이트함

            상태가 변경되면 React가 다시 렌더링하여
            화면에 새로운 시간이 표시됨

            주의:
            useEffect 자체가 매초 실행되는 것은 아님
            useEffect가 등록한 setInterval의 콜백이
            매초 실행되는 것임
        */
        const timer = setInterval(() => setNowTime(new Date()), 1000);

        /*
            Cleanup Function(정리 함수)

            useEffect에서 함수를 반환하면
            React는 해당 함수를 정리 함수로 사용함

            clearInterval(timer)는 등록한 타이머를 제거함

            컴포넌트가 언마운트될 때 실행되며,
            Effect가 다시 설정되기 전에도 실행될 수 있음

            타이머가 불필요하게 계속 실행되는 것을 방지함
        */
        return () => clearInterval(timer);
    }, []);

    const hours = String(nowTime.getHours()).padStart(2, "0");
    const minutes = String(nowTime.getMinutes()).padStart(2, "0");
    const seconds = String(nowTime.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    /*
        백틱(` `): 템플릿 리터럴을 만드는 문법

        문자열 내부에서 ${}를 사용하면
        JavaScript 변수나 표현식의 결과를 삽입할 수 있음

        예시:
        const name = "철수";
        const message = `안녕하세요 ${name}`;
        → "안녕하세요 철수"

        아래 코드에서는 hours, minutes, seconds를
        HH:MM:SS 형태의 문자열로 결합함

        예시 결과: "09:05:03"

        일반 문자열 연결 방식으로도 작성 가능:
        const timeString = hours + ":" + minutes + ":" + seconds;

        단순 문자열은 "" 또는 ''를 사용해도 되지만
        변수를 문자열에 삽입할 때는 백틱이 편리함
    */
    return (
        <div>
            {/*
                JSX의 {}와 템플릿 리터럴의 ${} 차이

                JSX의 {}:
                → JSX 안에서 JavaScript 표현식을 사용

                템플릿 리터럴의 ${}:
                → 백틱 문자열 안에 JavaScript 표현식 삽입

                여기서는 이미 timeString이라는
                문자열을 만들어 두었으므로
                JSX의 {}만 사용하면 됨

                아래처럼 직접 작성하는 것도 가능함:

                <time>{`${hours}:${minutes}:${seconds}`}</time>

                바깥쪽 {}는 JSX 표현식,
                안쪽 ${}는 문자열 내부의 변수 삽입임
            */}
            <time>
                {timeString}
            </time>
        </div>
    );
}

export default Clock;