const intialItem = {}
const ItemReducer = (state = intialItem, action) => {
    switch (action.type) {
        case 'PRODUCT':
            state.product = action.payload
            console.log('ItemReducer: ',state)            
            return state
        case 'QTD':
            state.qtd = Number(action.payload)
            return state
        case 'PRICE':
            state.price = Number(action.payload)
            return state
        case 'EDIT':
            return action.item
        default:
            return state;
    }
}

export default ItemReducer