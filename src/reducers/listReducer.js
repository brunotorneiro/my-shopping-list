import list from '../list'

const listReducer = (state = list, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.i];

        case 'EDIT_LIST':
            return (
                state.map(it => {
                    if (it.id.toString() === action.item.id) {
                        it = { ...action.item }
                    }
                    return it
                })
            )

        default:
            return state;
    }
}

export default listReducer