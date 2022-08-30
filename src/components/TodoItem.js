function TodoItem(props) {
  return (
    <div className="todo-item">
      <label><input 
        type="checkbox" 
        checked={props.completed}
        onChange={event => props.onChange(event.target.checked)}
      ></input> {props.text}</label>
    </div>
  );
}

export default TodoItem;