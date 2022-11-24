import { Store } from "../store/Store"
import TodayTodo from "../TodayTodo/TodayTodo"
import TodoCardList from "../TodoCardList/TodoCardList"

const Body = () => {
    return(
        <Store>
            <TodayTodo/>
            <TodoCardList/>
        </Store>
    )
}

export default Body