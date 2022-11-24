import styled from '@emotion/styled';
import "@fontsource/abhaya-libre";
import { useContext, useState } from 'react';
import { Checkbox, Typography } from '@mui/material';
import TodoList from '../TodoList/TodoList';
import { TodoContext } from '../store/Store';

const TodayTodo = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const {todayTodo, setTodayTodo} = useContext(TodoContext);

    const handleChangeCheckedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedAll(event.target.checked);
        // setTodayTodo(todayTodo.tasks.map(item => ({...item, check: event.target.checked})))
    };

    return(
        <TodoBlock>
            <TodoTitle>
                <TodoCheckbox
                    icon={<CheckboxIcon/>}
                    checkedIcon={<CheckboxIconChecked/>}
                    checked={checkedAll}
                    onChange={handleChangeCheckedAll}
                />
                <Typography variant="h2">Today Tasks:</Typography>
            </TodoTitle>
            <TodoList todoList={todayTodo.tasks}/>
        </TodoBlock>
    )
}

const CheckboxIcon = styled.span`
    width: 23px;
    height: 23px;
    border: 2px solid #F4F4F4;
    border-radius: 6px;
`

const CheckboxIconChecked = styled(CheckboxIcon)`
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('data:image/svg+xml;utf8,<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent('#F4F4F4',
        )}" d="M16.4908 0C20.3893 0 22.9998 2.73697 22.9998 6.80794V16.2045C22.9998 20.2628 20.3893 22.9998 16.4908 22.9998H6.52044C2.62198 22.9998 0 20.2628 0 16.2045V6.80794C0 2.73697 2.62198 0 6.52044 0H16.4908ZM16.3069 8.04993C15.9159 7.65893 15.2719 7.65893 14.8809 8.04993L10.1314 12.7994L8.11893 10.7869C7.72793 10.3959 7.08393 10.3959 6.69294 10.7869C6.30194 11.1779 6.30194 11.8104 6.69294 12.2129L9.42991 14.9384C9.62541 15.1339 9.87841 15.2259 10.1314 15.2259C10.3959 15.2259 10.6489 15.1339 10.8444 14.9384L16.3069 9.47591C16.6978 9.08492 16.6978 8.45242 16.3069 8.04993Z"/></svg>');
    }
`

const TodoBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const TodoCheckbox = styled(Checkbox)`
    padding: 0;
    margin: 0 10px 0 16px;
`

const TodoTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    & > h2 {
        font-family: 'Abhaya Libre SemiBold';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
    }
`

export default TodayTodo