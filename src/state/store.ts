import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";
import {TasksStateType, TodolistType} from "../AppWithRedux";

// type AppRootType = {
//     todolists: Array<TodolistType>
//     tasks: TasksStateType
// }
 export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})
export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;