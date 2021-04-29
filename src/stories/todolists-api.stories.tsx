import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res)=>{
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('Vanya')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a5ecf308-1032-4d10-892b-db36fb7bec28";
        todolistAPI.deleteTodolist(todolistId)
            .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'fd235393-4aa1-4a8a-abc8-8a421a43bb28'
            todolistAPI.updateTodolist(todolistId,'NewReact')
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTask = () => {
    const [state, setState] = useState<any>(null)
        const todolistId = 'a863a16f-3d06-41ec-9698-37a96876a99e'
        todolistAPI.getTasks(todolistId)
            .then((res)=>{
                setState(res.data)
            })

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)

        const todolistId = 'fd235393-4aa1-4a8a-abc8-8a421a43bb28'
        todolistAPI.createTasks(todolistId, 'AlexTask')
            .then((res)=>{
                setState(res.data)
            })

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = 'fd235393-4aa1-4a8a-abc8-8a421a43bb28'
    const taskId = '074135ae-8da6-473f-839a-678f4e9395b7'
    todolistAPI.deleteTasks(todolistId, taskId)
        .then((res)=>{
            setState(res.data)
        })

    return <div> {JSON.stringify(state)}</div>
}

