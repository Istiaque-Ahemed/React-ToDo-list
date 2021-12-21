import React from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <div className="todo-li">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className="complete-btn">
                    <FontAwesomeIcon className="icon" icon={faCheck} />
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <FontAwesomeIcon className="icon" icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Todo;