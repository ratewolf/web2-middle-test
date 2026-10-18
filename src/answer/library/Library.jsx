import React from "react";
import Book from "./Book"


// 부모 Library가 데이터를 전달하고 자식 Book이 도서 한 권의 표시를 담당함
function Library() {
    return(
        <div>
            {/* 따옴표는 문자열, {300}은 숫자 전달. 속성 이름은 Book에서 읽는 이름과 같아야 함 */}
            <Book name="처음 만난 Java" numOfPage={300}/>
            <Book name="난생 처음 자바" numOfPage={200}/>
            <Book name="처음 보는 React" numOfPage={500}/>
        </div>

    );

}

export default Library;