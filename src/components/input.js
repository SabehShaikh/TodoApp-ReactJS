import React, { useState } from "react";


function TodoInput(props) {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("");
        }
    }
    return (
        <div className="input-container">
            <input
                className="input-box-todo"
                placeholder="Enter things you want Todo"
                type="text"
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnterPress}
            />
            <button className="add-btn"
                onClick={() => {
                    props.addList(inputText)
                    setInputText("");
                }}
            >+</button>
           
        </div>

    )
}

export default TodoInput;