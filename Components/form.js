import React from "react";

export const Form = ({ inputText, setInputText, setTodos, todos }) => {
	

	const inputTextHandler = (e) => {
	   setInputText(e.target.value)
                }
	const submitTodoHandler = (e) => {
		e.preventDefault();
	       if(inputText){
		setInputText("");
		setTodos([
		...todos,
		{ texts: inputText, completed: false, id: Math.random() * 1000 },
		]);
	                       }
	};

	return (
		<div>
			<form className="todo-form">
				<input
					type="text"
					className="todo-input"
					value={inputText}
					onChange={inputTextHandler}
					placeholder=" Add a task "
				/>
				<button onClick={submitTodoHandler} className="Add">
					+
				</button>
			</form>
		</div>
	);
}
export default Form;
