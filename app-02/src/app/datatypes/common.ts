export const RouteLink = {
    empty: '*',
    root: '/',
    topics: '/topics',
    nested: '/*',
    topicId: ':topicId',
    shelf: '/shelf',
    fancy: '/fancy',
    workShop: '/workShop',
    bar: '/bar',
    editor: '/editor',
}

export enum ACTIONS {
    ADD_TODO = 'addTodo',
    TOGGLE_TODO = 'toggleTodo',
    DELETE_TODO = 'deleteTodo',
}

export type dispatchType = {
    type: ACTIONS.ADD_TODO | ACTIONS.TOGGLE_TODO | ACTIONS.DELETE_TODO,
    payload: { id?: string, name?: string, complete?: boolean },
}

export interface IDispatch {
    id: string;
    name: string;
    complete: boolean;
}