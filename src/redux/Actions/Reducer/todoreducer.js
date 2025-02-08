let initval = ["I have to Hit The Gym"];

function todoreducer(state = initval, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];             // Add new todo
        case 'update':
            return state.map(todo => 
                todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
            );                                            // Update the todo 
        case 'delete':
            return state.filter(todo => todo.id !== action.payload.id); // Remove the todo with the matching id
        default:
            return state;
    }
}

export default todoreducer;