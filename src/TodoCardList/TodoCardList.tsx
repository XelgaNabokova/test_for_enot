import { useContext } from 'react';
import { TodoContext } from '../store/Store';
import TodoCard from "../TodoCard/TodoCard";

const TodoCardList = () => {

    const {todoList} = useContext(TodoContext);

    return(
        <div>
            { todoList.map(card => <TodoCard card={card}/>) }
        </div>
    )
}

export default TodoCardList
