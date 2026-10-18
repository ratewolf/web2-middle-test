import React from "react";

class ToggleButton extends React.Component {
    constructor(props) {
        // 부모 클래스 생성자를 먼저 호출한 뒤 this를 사용함
        super(props);
        // 생성자에서는 초기 상태를 직접 지정함. 이후 변경은 setState로 요청함
        this.state = { isToggleOn: true };
        // 메서드를 이벤트 콜백으로 전달해도 this가 현재 컴포넌트를 가리키도록 고정함
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 이전 상태를 받아 다음 상태 객체를 반환함. ({...})는 객체를 바로 반환하는 문법
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // 상태가 변경되면 render가 다시 호출되어 버튼 문구를 갱신함
    render() {
        return (
            <div>
                {/* 바인딩해 둔 메서드를 전달하고, 불리언 상태에 따라 문구를 선택함 */}
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? '켜짐' : '꺼짐'}
                </button>
            </div>
        );
    }
}

export default ToggleButton;