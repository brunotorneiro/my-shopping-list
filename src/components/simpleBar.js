import React from 'react'
import { addItem } from '../actions/listAction'
import { useDispatch, useSelector } from 'react-redux'
import { setQtd, setPrice, setProduct } from '../actions/itemAction'

function SimpleBar() {
    const item = useSelector(state => {
        return state.item
    })
    
    const dispatch = useDispatch()

    function productChange(e) {
        let value = e.target.value
        dispatch(setProduct(value))
    }

    function qtdChange(e) {
        let value = e.target.value
        dispatch(setQtd(value))
    }

    function priceChange(e) {
        let value = e.target.value
        dispatch(setPrice(value))
    }

    function addItemOnClick(e) {
        e.preventDefault()
        return dispatch(addItem(item))
    }

    return (
        <div className='simple-bar m-2'>
            <form>
                <input placeholder='Produto' onChange={productChange} type='text'></input>
                <input placeholder='Quantidade' onChange={qtdChange} type='number'></input>
                <input placeholder='Preço' onChange={priceChange} type='text'></input>
                <button className='btn btn-outline-success btn-lg' onClick={addItemOnClick} data-dismiss="modal">Incluir</button>
            </form>
        </div>
    )
}

export default SimpleBar