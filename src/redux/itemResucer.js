let first = true
let teste = 0
const ItemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCT':
            state.product = action.payload
            return state
        case 'QTD':
            if (isNaN(action.payload)) {
                action.payload = '0.00'
            }
            state.qtd = Number(action.payload)
            return state
        case 'PRICE':
            if (isNaN(action.payload)) {
                action.payload = '0.00'
            }
            if (first === true) {
                state.price = (Number(action.payload) / 100)
                first = false
                teste = state.price
                console.log(teste)
            } else {
                if (teste <= Number(action.payload)) {
                    state.price = Number((action.payload * 10).toFixed(2))
                    teste = Number(state.price)
                    console.log(teste)
                } else {
                    state.price = Number((action.payload / 10).toFixed(2))
                    teste = Number(state.price)
                    console.log(teste)
                }

            }
            return state

        case 'EDIT_ITEM':
            return { ...action.item }
        default:
            return state;
    }
}

export default ItemReducer