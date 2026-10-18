import React from "react";
import ConfirmDialog from "./ConfirmDialog";

// 같은 ConfirmDialog를 재사용하고, 태그 사이의 내용만 바꾸어 전달함
function ConfirmDialogList() {
    return(
        <div>
            {/* 여는 태그와 닫는 태그 사이의 내용은 자식의 props.children으로 전달됨 */}
            <ConfirmDialog>내용</ConfirmDialog>
            <ConfirmDialog>방송</ConfirmDialog>
            <ConfirmDialog>게시글</ConfirmDialog>
        </div>
    );
}

export default ConfirmDialogList;