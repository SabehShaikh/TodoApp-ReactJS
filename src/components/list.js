import React from "react";

function TodoList(props) {
    return (
        <div className="list-item">
            {props.item}
            <span className="icons">
                <i
                    className="fa-solid fa-trash-can icon-delete"
                    onClick={() => {
                        props.deleteItem(props.index);
                    }}
                ></i>
            </span>
        </div>
    );
}

export default TodoList;

