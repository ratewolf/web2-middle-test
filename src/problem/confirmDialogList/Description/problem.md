# children과 props로 확인 안내 구성하기

안내 문구와 색상 버튼을 재사용하여 세 개의 확인 안내 영역을 구현하라.

## 구현할 내용

- `ConfirmDialogList`에서 `내용`, `방송`, `게시글`을 순서대로 `ConfirmDialog`의 여는 태그와 닫는 태그 사이에 전달한다.
- `ConfirmDialog`는 전달받은 내용을 이용하여 `내용을 확인한 후 버튼을 눌러주세요.`와 같은 문장을 `<p>`에 표시한다.
- 각 안내 아래에 다음 버튼을 나란히 표시하고 버튼 사이에 공백을 둔다.

| 버튼 문구 | color | CSS 클래스 |
| --- | --- | --- |
| 확인 | green | bg-green |
| 취소 | blue | bg-blue |
| 초기화 | red | bg-red |

- `ColorButton`은 `color`로 CSS 클래스 이름을 만들고, 태그 사이에 전달된 버튼 문구를 `<b>`로 감싸 표시한다.
- 이 예제는 컴포넌트 합성과 스타일 적용을 연습한다. 버튼 클릭 시 별도 동작은 요구하지 않는다.

## 작성할 파일과 제약사항

- `../ConfirmDialogList.jsx`, `../ConfirmDialog.jsx`, `../ColorButton.jsx`에 각각 파일과 같은 이름의 함수 컴포넌트를 작성하고 기본 내보내기한다.
- `ConfirmDialogList`는 `ConfirmDialog`를, `ConfirmDialog`는 `ColorButton`을 가져와 사용한다.
- 태그 사이의 내용은 `props.children`, 버튼 색상은 `props.color`로 읽는다. 템플릿 리터럴로 `bg-색상` 형태의 `className`을 만든다.
- `../ConfirmDialog.css`에 스타일을 작성하고 `ConfirmDialog`에서 가져온다. 모든 버튼은 글자색 `white`, 여백 `5px`, 안쪽 여백 `7px`, 너비 `70px`로 한다.
- 초록 버튼은 배경 `#389927`, 테두리 `3px inset #9900ff`, 파랑 버튼은 배경 `#0d53ea`, 테두리 `3px dotted orange`, 빨강 버튼은 배경 `#fc0e31`, 테두리 `3px ridge #00ffc4`로 한다.

## 실행 결과 확인

세 안내 문구와 총 아홉 개의 버튼이 나타나는지 확인하라. 각 영역의 버튼 순서는 확인·취소·초기화이며, 배경색은 초록·파랑·빨강이어야 한다.
