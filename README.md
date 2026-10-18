# 웹프로그래밍활용 기말시험 대비 연습 자료

React 예제를 직접 구현하고, 정답 코드의 주석과 비교하며 복습하는 프로젝트입니다.

## 학습 방법

1. `src/problem/예제명/Description/problem.md`에서 구현 조건과 확인 예시를 읽습니다.
2. 같은 예제 폴더의 비어 있는 JSX 파일에 직접 구현합니다. 확인 안내 예제는 CSS 파일도 작성합니다.
3. `src/index.js`에서 실행할 컴포넌트의 import 경로와 렌더링 대상을 자신의 풀이로 바꿉니다.
4. 화면 동작과 콘솔 출력을 문제의 확인 예시에 맞춰 확인합니다.
5. `src/answer`의 같은 예제를 열어 구현을 비교하고, 주석에서 문법과 동작 이유를 확인합니다.

## 디렉터리 구조

- `src/problem`: 직접 풀이할 파일과 예제별 `Description/problem.md`.
- `src/answer`: 교수님이 제공한 정답 코드와 학습용 주석.
- `src/answer/accommodate`: 사용자 정의 훅을 사용하는 방식과 사용하지 않는 방식.
- `src/answer/toggleButton`: 함수 컴포넌트 방식과 클래스 컴포넌트 방식.
- `src/index.js`: 실제 화면에 표시할 컴포넌트를 선택하는 진입점.

## 예제 목록

| 예제 | 학습 내용 | 문제 설명 |
| --- | --- | --- |
| library | 컴포넌트 재사용, props, 템플릿 리터럴 | [문제](src/problem/library/Description/problem.md) |
| confirmDialogList | children, 컴포넌트 합성, CSS 클래스 | [문제](src/problem/confirmDialogList/Description/problem.md) |
| toggleButton | 불리언 상태, 이벤트 처리, 클래스의 this 바인딩 | [문제](src/problem/toggleButton/Description/problem.md) |
| myButton | 이벤트 객체, 추가 인수 전달, 상태 업데이트 시점 | [문제](src/problem/myButton/Description/problem.md) |
| messageTelautograph | 제어 입력, 상태 공유, 입력 초기화 | [문제](src/problem/messageTelautograph/Description/problem.md) |
| accommodate | 함수형 업데이트, 조건부 렌더링, 사용자 정의 훅 | [문제](src/problem/accommodate/Description/problem.md) |
| clock | Effect, 타이머 정리, 날짜·시간 형식 지정 | [문제](src/problem/clock/Description/problem.md) |
| notificationList | 클래스 생명주기, 목록 렌더링, key | [문제](src/problem/notificationList/Description/problem.md) |
| todoListApp | 배열 상태, 전개 구문, map, filter, 키보드 이벤트 | [문제](src/problem/todoListApp/Description/problem.md) |

## 실행 방법

Node.js와 npm이 설치된 환경에서 프로젝트 루트를 기준으로 실행합니다.

```sh
npm install
npm start
```

개발 서버가 표시하는 주소를 브라우저에서 엽니다. 현재 진입점은 `src/answer/confirmDialogList/ConfirmDialogList`를 표시합니다. `App.js`가 아니라 `src/index.js`의 import와 JSX를 바꾸어 예제를 전환해야 합니다.

예를 들어 시계 풀이를 실행하려면 import를 `import Clock from "./problem/clock/Clock";`으로 바꾸고, `root.render` 안의 컴포넌트를 `<Clock />`으로 바꿉니다. 정답과 비교할 때는 import 경로의 `problem`을 `answer`로 바꿉니다. 비어 있는 풀이 파일은 구현한 뒤 가져와야 합니다.

현재 `src/index.js`는 1초 간격으로 `root.render`를 호출합니다. 이것은 각 예제 내부의 타이머와 별개이며, 같은 컴포넌트를 같은 위치에 다시 렌더링해도 매번 새로 마운트되는 것은 아닙니다. `StrictMode`의 추가 실행과 부모의 재렌더링 때문에 콘솔 로그 횟수는 문제의 단일 마운트 예시와 다를 수 있습니다.

정답은 수업 예제를 보존합니다. 배열 직접 변경, 인덱스 key 등 주의할 부분은 해당 정답의 주석에서 함께 설명합니다.
