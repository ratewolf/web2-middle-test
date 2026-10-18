import React from "react";
import ColorButton from "./ColorButton";
// CSS 파일을 가져오면 ColorButton에서 지정한 클래스의 스타일도 적용됨
import "./ConfirmDialog.css"

function ConfirmDialog(props) {
    return (
        <div>
            {/* 부모가 전달한 children에 안내 문장을 이어 붙임 */}
            <p>{props.children}을 확인한 후 버튼을 눌러주세요.</p>

            {/* color는 일반 prop, 확인·취소·초기화는 각 ColorButton의 children임 */}
            {/* &nbsp;는 줄 바꿈되지 않는 공백을 넣는 HTML 엔티티 */}
            <ColorButton color={`green`}>확인</ColorButton> &nbsp;
            <ColorButton color={`blue`}>취소</ColorButton> &nbsp;
            <ColorButton color={`red`}>초기화</ColorButton> &nbsp;
        </div>
    );
}

export default ConfirmDialog;