class Item {
    static lastId = 3
    constructor (item){
        Item.lastId++
        this.id = Item.lastId
        this.product = item.product
        this.qtd = item.qtd
        this.price = item.price
    }
}

export default Item