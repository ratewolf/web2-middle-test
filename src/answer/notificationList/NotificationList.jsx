import React from "react";
import Notification from "./Notification";

// 앞으로 표시할 알림 데이터. 현재 화면에 표시 중인 상태 배열과 구분함
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 여러분. 반갑습니다!"
    },
    {
        id: 2,
        message: "오늘은 10월을 시작하는 날입니다."
    },
    {
        id: 3,
        message: "오늘 기분은 어떠신가요?"
    },
    {
        id: 4,
        message: "만약 우울하시다면 기분 전환을 위해 독서는 어떨까요?"
    },
    {
        id: 5,
        message: "내일은 더 좋은 날이 될거라고 믿어요!"
    },
];

// 타이머 식별자. 원본은 모듈 범위에 두므로 여러 인스턴스가 이 변수를 공유함
// 여러 인스턴스나 StrictMode의 재마운트에서는 타이머 관리에 주의가 필요한 구조임
let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        // 처음에는 화면에 표시할 알림이 없음
        this.state = {
            notifications: []
        }
    }

    render() {
        return (
            <div>
                {
                    // map은 요소들의 배열을 반환함. key는 React의 식별자이고 자식에게는 id를 따로 전달함
                    this.state.notifications.map((notification) => {
                        return <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}/>
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        // 객체 구조 분해: 상태의 배열을 참조함. 복사한 배열이 아니라 같은 배열임
        const {notifications} = this.state;

        // 마운트 후 약 3초마다 콜백 실행. componentDidMount 자체가 반복되는 것은 아님
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                // 현재 길이가 다음에 추가할 데이터의 인덱스임: 길이 0이면 첫 번째 알림
                const index = notifications.length;
                // 원본은 push로 상태 배열을 직접 변경함. 일반적으로는 새 배열을 만들어 갱신하는 편이 적합함
                // push만으로는 React에 갱신을 알리지 못하므로 아래 setState도 호출함
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications
                });
            } else {
                // 마지막 알림을 추가한 다음 회차에 이 분기로 들어와 타이머를 해제함
                clearInterval(timer);
            }
        },3000);
    }

    // 중간에 화면에서 제거되어도 타이머 콜백이 계속 실행되지 않도록 정리함
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer)
        }
    }
}

export default NotificationList;