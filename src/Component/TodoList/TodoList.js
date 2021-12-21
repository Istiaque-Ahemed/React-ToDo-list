import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({ todos, setTodos,filteredTodos }) => {
    console.log(todos);
    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                        filteredTodos={filteredTodos}
                        >
                    </Todo>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;