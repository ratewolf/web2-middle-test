import React from "react";
import ColorButton from "./ColorButton";
import "./ConfirmDialog.css"

function ConfirmDialog(props) {
    return (
        <div>
            <p>{props.children}을 확인한 후 버튼을 눌러주세요.</p>

            <ColorButton color={`green`}>확인</ColorButton> &nbsp;
            <ColorButton color={`blue`}>취소</ColorButton> &nbsp;
            <ColorButton color={`red`}>초기화</ColorButton> &nbsp;
        </div>
    );
}

export default ConfirmDialog;