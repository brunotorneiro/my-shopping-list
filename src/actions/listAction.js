import Item from '../item'
export const addItem = (product,qtd,price) => {
    let i = new Item(product,qtd,price)
    return {type: 'ADD_ITEM', i}
}

export const editList = item => {
    return {type: 'EDIT_LIST', item}
}
