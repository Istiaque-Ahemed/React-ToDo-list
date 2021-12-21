import React from 'react';
import './Forms.css'
import { Form, Button, Dropdown as div } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Forms = ({ inputText, SetInputText, todos, setTodos,setStatus }) => {
    const inputTextHandler = (e) => {
        SetInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        SetInputText("")
    }
    const statusHandler =(e)=>{
        setStatus(e.target.value);
    }
    return (
        <>
            <form>
                <div className="form">

                    <Form.Control value={inputText} onChange={inputTextHandler} className="w-50 form" type="text" placeholder="ToDo" required />
                    <Button onClick={submitTodoHandler} type="submit" className="btn-danger">
                        <FontAwesomeIcon icon={faPlusSquare} />

                    </Button>
                    <div className="selectdiv ps-4">
                        <select onClick={statusHandler} name="todos" className="filter-todo" >
                           <FontAwesomeIcon icon={faArrowDown}/> 
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
            </form>

        </>
    );
};

export default Forms;