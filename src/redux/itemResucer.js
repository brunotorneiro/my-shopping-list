let first = true
const ItemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT':
            state.product = action.payload
            return state
        case 'QTD':
            if (isNaN(action.payload)) {
                action.payload = ''
            }
            state.qtd = Number(action.payload)
            return state
        case 'PRICE':
            if (isNaN(action.payload.value)) {
                action.payload.value = (0).toFixed(2)
            }
            if (first === true && action.payload.type ==='ADD_MODAL') {
                state.price = (Number(action.payload.value) / 100).toFixed(2)
                first = false
            } else {
                if (state.price > Number(action.payload.value) || String(action.payload.value).length === 4) {
                    state.price = Number(((action.payload.value) / 10).toFixed(2))
                } else {
                    state.price = Number(((action.payload.value) * 10).toFixed(2))
                }

            }
            state.price = Number(state.price).toFixed(2)
            return state

        case 'EDIT_ITEM':
            return { ...action.item }
        default:
            return state;
    }
}

export default ItemReducer