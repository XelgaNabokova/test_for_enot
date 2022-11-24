import { useContext } from 'react';
import styled from '@emotion/styled';
import { ITodoItemTask } from '../models';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { TodoContext } from '../store/Store';

const TodoItem = ({
    id, 
    title, 
    subtitle, 
    color,
    check, 
}: ITodoItemTask) => {

    const {todoList, setTodoList} = useContext(TodoContext);

    const handleChangeCheckedItem = (event: React.ChangeEvent<HTMLInputElement>, id: number | string) => {
        // const tasks = todoList.map(item => item.tasks)
        // setTodoList(tasks.map(i =>i.id === id ? {...i, check: event.target.checked} : i))
    };

    return(
        <ItemBlock>
            <ItemLeft color={color}>
                <span className='line'></span>
                <ItemTitle>
                    <Typography variant='h2' className={check ? 'done' : ''}>{title}</Typography>
                    <Typography variant='subtitle1'>{subtitle}</Typography>
                </ItemTitle>
            </ItemLeft>
            <ItemSwitch checked={check} onChange={(e) => handleChangeCheckedItem(e, id)}/>
        </ItemBlock>
    )
}

const ItemBlock = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const ItemTitle = styled.div`
    display: flex;
    flex-direction: column;

    & > h2 {
        font-family: 'Abhaya Libre SemiBold';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        &.done {
            text-decoration: line-through;
        }
    }

    & > h6 {
        font-size: 14px;
        line-height: 17px;
        vertical-align: text-top;
        color: rgba(255, 255, 255, 0.6);
    }
`

const ItemLeft = styled.div`
    display: flex;
    align-items: center;

    & > span.line {
        background: ${props => props.color};
    }
`
const ItemSwitch = styled(Switch)`
    width: 50px;
    height: 30px;
    padding: 0;

    & .MuiSwitch-switchBase {
        padding: 2.5px;
        color: #A9A9A9;

        &.Mui-checked {
            color: #A9A9A9;
            & .MuiSwitch-thumb:before {
                top: 1px;
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="15" viewBox="0 0 15 12"><path fill="${encodeURIComponent('#A9A9A9',
                )}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>');
            }
            & + .MuiSwitch-track {
                opacity: 1;
                background: #10C200;
            },
        }
    }

    & .MuiSvgIcon-root {
        width: 25px;
        height: 25px;
        background: #F4F4F4;
        border-radius: 20px;
    }

    & .MuiSwitch-thumb {
        width: 25px;
        height: 25px;
        background: #F4F4F4;
        border-radius: 20px;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 14 14"><path fill="${encodeURIComponent('#A9A9A9',
            )}" d="M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z"/></svg>');
        }
    }

    & .MuiSwitch-track {
        width: 50px;
        height: 30px;
        background: #366EFF;
        box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        opacity: 1;
    }
`


export default TodoItem