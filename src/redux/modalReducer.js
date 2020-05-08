const modalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_MODAL':
            return action.payload
        case 'EDIT_MODAL':
            return action.payload
        default:
            return state
    }
}

export default modalReducer