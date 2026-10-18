import React from "react";

class Notification extends React.Component {
    // 생성자: 부모 생성자에 props를 전달함. 추가 초기화가 없어 이 생성자는 생략 가능함
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* 클래스 컴포넌트에서는 this.props로 부모가 전달한 값을 읽음 */}
                <span>{this.props.message}</span>
            </div>
        );
    }

    // 자식이 화면에 마운트된 후 실행됨. key는 props로 전달되지 않으므로 id를 별도로 받음
    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount Called`)
    }

    // 업데이트가 반영된 후 실행됨. 메시지가 같아도 부모 재렌더링으로 호출될 수 있음
    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate Called`)
    }

    // 이 컴포넌트가 화면에서 제거되기 직전에 실행됨
    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount Called`)
    }
}

export default Notification;