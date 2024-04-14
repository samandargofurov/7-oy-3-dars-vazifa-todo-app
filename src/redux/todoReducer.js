const defaultState = {
    todo: []
}

export function todoReducer(state = defaultState, action) {
    if(action.type == "TODO_ADD") {
        let copied = JSON.parse(JSON.stringify(state.todo))
        copied.push(action.payload)

        return {...state, users: copied}

    } else if (action.type == "TODO_DELETE") {
    } else if (action.type == "TODO_EDIT") {
    } else {
        return state;
    }
}