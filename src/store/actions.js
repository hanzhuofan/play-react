export const actions = {
    ADD_TODO : "ADD_TODO",
    TOGGLE_TODO : "TOGGLE_TODO",
    SET_FILTER : "SET_FILTER"
};

let nextTodoId = 0;

export const addTodo = content => ({
    type: actions.ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: actions.TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: actions.SET_FILTER,
    payload: { filter }
});