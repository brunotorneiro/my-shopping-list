export const mySum = (list) => {
    let total = 0
    list.forEach(line => {
        total += line.qtd * line.price
    });
    return total
}

export const myTotal = (list) => myBRL(mySum(list))

export const myRest = (list, limit) => myBRL(limit - mySum(list))

export const myBRL = (number) => {
    if(number){
        return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }else{
        return number
    }
}

export const MyMap = (state, action) => {
    return (state.map(it => {
        if (it.id.toString() === action.item.id) {
            switch (action.type) {
                case 'EDIT_PRODUCT':
                    it.product = action.item.product
                    break;

                case 'EDIT_QTD':
                    it.qtd = action.item.qtd
                    break;

                case 'EDIT_PRICE':
                    it.price = action.item.price
                    break;

                default:
                    break;
            }

        }
        return it
    })
    )
}