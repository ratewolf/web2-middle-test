import React, {useState} from "react";

function TodoListApp() {
    // 목록 데이터와 입력 중인 문자열을 별도 상태로 관리함
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        // trim은 검사에만 사용함. 공백만 있는 입력은 거르고, 유효한 원문은 그대로 저장함
        if (input.trim() !== '') {
            // 기존 배열을 직접 변경하지 않고, 기존 항목과 새 항목을 담은 배열을 만듦
            setTodos([...todos, input]);
            // value와 연결된 입력 상태를 비우면 화면의 입력란도 비워짐
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        // 버튼 클릭과 Enter 입력이 동일한 추가 로직을 공유함
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const handleDeleteTask = (indexToDelete) => {
        // filter는 조건이 true인 항목만 모은 새 배열을 반환함
        // 문구가 같아도 선택한 인덱스 하나만 제외하므로 다른 항목은 유지됨
        const newTodos = todos.filter(
            (todo, index) => index !== indexToDelete
        );

        setTodos(newTodos);
    };

    return (
        <div>
            <h2>My Groceries</h2>

            <div>
                {/* 제어 입력: 상태를 value에 표시하고 입력 이벤트에서 그 상태를 갱신함 */}
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a new item..."
                    type="text"
                />

                <button onClick={handleAddTask}>
                    Add Task
                </button>
            </div>

            <ul>
                {/* map은 배열의 각 항목을 JSX 요소로 바꿈. 더블클릭 콜백은 인덱스를 전달하도록 감쌈 */}
                {/* 인덱스 key는 수업 예제 방식임. 항목이 삭제·재정렬되는 실제 목록에는 고유 ID가 적합함 */}
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onDoubleClick={() => handleDeleteTask(index)}
                        title={`더블클릭하여 삭제`}
                    >
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoListApp;