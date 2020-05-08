import list from '../list'

const listReducer = (state = list, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            action.i.price = Number(action.i.price)
            return [...state, action.i];

        case 'EDIT_LIST':
            return (
                state.map(it => {
                    if (it.id === action.item.id) {
                        action.item.price = Number(action.item.price)
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