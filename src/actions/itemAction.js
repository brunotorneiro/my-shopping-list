export const setProduct = (product) => {
    return (        
        { type: 'PRODUCT', payload: product }
    )
}

export const setQtd = (qtd) => {
    return (
        { type: 'QTD', payload: qtd }
    )
}

export const setPrice = (price) => {
    return (
        { type: 'PRICE', payload: price }
    )
}

export const editItem = item => {
    return { type: 'EDIT', item }
}