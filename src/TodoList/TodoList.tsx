import styled from '@emotion/styled';
import TodoItem from '../TodoItem/TodoItem';
import { ITodoItemTask } from '../models';

interface ITodoListProps {
    todoList: ITodoItemTask[]
}

const TodoList = ({todoList}: ITodoListProps) => {

    return (
        <STodoList>
            { todoList.map((item) => 
                <TodoItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    color={item.color}
                    check={item.check}
                />
            )}
        </STodoList>
    )
}

const STodoList = styled.ul`
    width: 100%;
    height: auto;
    background: #282828;
    box-shadow: 16px 16px 20px rgb(0 0 0 / 15%), -8px -8px 20px rgb(255 255 255 / 5%);
    border-radius: 25px;
    color: #F4F4F4;
    padding: 1rem 25px 18px 17px;
`

export default TodoList