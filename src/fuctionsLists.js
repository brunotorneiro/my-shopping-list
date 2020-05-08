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