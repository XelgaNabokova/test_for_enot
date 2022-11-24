// const moment = require('moment');
import { useState, createContext, Dispatch, SetStateAction, useEffect } from 'react';
import { ITodoItem } from '../models';

const initialTodoList: ITodoItem[] = [
  {
    id: 0,
    date: '2022/11/08',
    tasks: [
      {id: 0, title: 'Visit David', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FF0000', check: false},
      {id: 1, title: 'Goceries For Dinner', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#366EFF', check: false},
      {id: 2, title: 'Fix Dad’s iPad', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FFEB33', check: false},
    ]
  },
  {
    id: 1,
    date: '2022/11/09',
    tasks: [
      {id: 0, title: 'Visit David', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FF0000', check: false},
      {id: 1, title: 'Goceries For Dinner', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#366EFF', check: false},
      {id: 2, title: 'Fix Dad’s iPad', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FFEB33', check: false},
    ]
  },
  {
    id: 2,
    date: '2022/11/10',
    tasks: [
      {id: 0, title: 'Visit David', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FF0000', check: false},
      {id: 1, title: 'Goceries For Dinner', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#366EFF', check: false},
      {id: 2, title: 'Fix Dad’s iPad', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FFEB33', check: false},
    ]
  },
  {
    id: 3,
    date: '2022/11/11',
    tasks: [
      {id: 0, title: 'Visit David', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FF0000', check: false},
      {id: 1, title: 'Goceries For Dinner', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#366EFF', check: false},
      {id: 2, title: 'Fix Dad’s iPad', subtitle: 'Lorem Ipsum Dolor Sit met...', color: '#FFEB33', check: false},
    ]
  }
]

export const TodoContext = createContext({
  todoList: [] as ITodoItem[],
  setTodoList: {} as Dispatch<SetStateAction<ITodoItem[]>>,
  todayTodo: {} as ITodoItem,
  setTodayTodo: {} as Dispatch<SetStateAction<ITodoItem>>,
});

export const Store = ({
  children,
  list = initialTodoList,
}: {
  children: React.ReactNode,
  list?: ITodoItem[];
}) => {
    const [todoList, setTodoList] = useState(list);
    const [todayTodo, setTodayTodo] = useState<ITodoItem>({id: 0, date: '', tasks: []});

    useEffect(() => {
      // const today = moment().format("YY-MM-DD");

      const today = '2022/11/09'

      todoList.forEach(item => {
        if(today === item.date) setTodayTodo(item);
      })

      setTodoList(todoList.filter(item => item.id !== todayTodo.id))

    }, [])

    return (
        <TodoContext.Provider value={{todoList, setTodoList, todayTodo, setTodayTodo}}>
          {children}
        </TodoContext.Provider>
      )
}