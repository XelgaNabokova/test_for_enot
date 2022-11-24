export interface ITodoItemTask {
    id: number | string,
    title: string,
    subtitle: string,
    color?: string
    check: boolean,
}

export interface ITodoItem {
    id: number | string,
    date: string,
    tasks: ITodoItemTask[]
}

// export interface ITodoItemProps extends ITodoItem {
//     handleChangeCheckedItem: (event: React.ChangeEvent<HTMLInputElement>, id:  number | string) => void,
// }

// export interface ITodoListProps {
//      handleChangeCheckedItem: (event: React.ChangeEvent<HTMLInputElement>, id:  number | string) => void,
// }