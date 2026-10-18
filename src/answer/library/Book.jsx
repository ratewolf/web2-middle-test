import React from "react";

// 부모가 전달한 속성은 props 객체로 받음. 자식은 props를 직접 변경하지 않음
function Book(props) {
    return (
        <div>
            {/* 바깥 {}는 JSX 표현식, 백틱 안의 ${}는 문자열에 값을 삽입하는 문법 */}
            {/* 같은 컴포넌트라도 props.name과 props.numOfPage에 따라 다른 도서를 표시함 */}
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 되어있습니다.`}</h2>
        </div>
    );
}

export default Book;