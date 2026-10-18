import React from "react";

class Notification extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    // 생성자
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.message}</span>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount Called`)
    }

    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate Called`)
    }

    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount Called`)
    }
}

export default Notification;