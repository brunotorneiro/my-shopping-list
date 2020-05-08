export const setProduct = (product) => {
    return (        
        { type: 'PRODUCT', payload: String(product).toUpperCase }
    )
}

export const setQtd = (qtd) => {
    return (
        { type: 'QTD', payload: qtd }
    )
}

export const setPriceOnChange = (price) => {
    return (
        { type: 'PRICE', payload: price }
    )
}
export const setPriceOnPress = (price) => {
    return (
        { type: 'PRICE_ON_PRESS', payload: price }
    )
}

export const editItem = item => {
    return { type: 'EDIT_ITEM', item }
}