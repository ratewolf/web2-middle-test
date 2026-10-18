import React, {useState} from "react";

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const handleDeleteTask = (indexToDelete) => {
        const newTodos = todos.filter(
            (todo, index) => index !== indexToDelete
        );

        setTodos(newTodos);
    };

    return (
        <div>
            <h2>My Groceries</h2>

            <div>
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