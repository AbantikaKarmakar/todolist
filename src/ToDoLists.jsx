import React from 'react';

const ToDoLists = (props) => {
    return (
    <>
    <div className='todo_style'>
        <i className="fa fa-times" onClick={() => {
            props.onSelect(props.id);
        }} aria-hidden="true"/>
        <li> {props.text} </li>
    </div>
    </>
    );
};

export default ToDoLists;