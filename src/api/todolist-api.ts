import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '07c457bc-e742-4380-afc8-e78bc10fd120'
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetTaskResponse = {
    error: string | null,
    totalCount: number,
    items: Array<TaskType>
}
type UpdateTaskType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}


export const todolistAPI = {
    getTodolist() {
        return  instance.get<Array<TodolistType>>(`todo-lists/`)
    },
    createTodolist( title: string) {
        return  instance.post<ResponseType<{item: TodolistType}>>(`todo-lists/`, {title: title})
    },
    deleteTodolist(todolistId: string) {
        return  instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return  instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title})
    },
    getTasks(todolistId: string){
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks(todolistId: string, title: string){
        return instance.post(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTasks(todolistId: string, taskId: string){
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, titleTask: string){
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {titleTask})
    }

}
