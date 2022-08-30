import { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: "Throw out the trash", completed: true },
    { id: uuidv4(), text: "Kill the cockroach", completed: false },
  ]);

  const items = tasks.map(
    ({id, text, completed}) => <TodoItem 
      key={id} 
      text={text} 
      completed={completed} 
      onChange={newCompleted => {
        setTasks(prevTasks => {
          const item = prevTasks.find(task => task.id === id);
          item.completed = newCompleted;
          return [...prevTasks];
        }
      )}}
    />
  );

  return (
    <div className="todo-list">
      {tasks.filter(item => item.completed === false).length > 0 ? items : "Nothing to do :)"}
    </div>
  );
}

export default TodoList;