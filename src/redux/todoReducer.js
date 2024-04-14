const defaultState = {
    Todo: []
}

export function todoReducer(state = defaultState, action) {
    if(action.type == "TODO_ADD") {
        let copied = JSON.parse(JSON.stringify(state.Todo))
        copied.push(action.payload)

        return {...state, Todo: copied}

    } else if (action.type == "TODO_DELETE") {
        let copied = JSON.parse(JSON.stringify(state.Todo))
        copied = copied.filter(el => {
            return el.id != action.payload
        })

        return {...state, Todo: copied}

    } else {
        return state;
    }
}