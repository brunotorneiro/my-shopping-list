import React from 'react'
import { addItem, editList } from '../redux/listAction'
import { useDispatch, useSelector } from 'react-redux'
import { setQtd, setProduct, editItem, setPrice } from '../redux/itemAction'

function MyForm() {
    const [item, modal] = useSelector(state => {
        return [state.item, state.modal]
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
        dispatch(setPrice({ value, type: modal.type }))
    }

    function addOrEditItemOnClick(e) {
        e.preventDefault()
        if (modal.type === 'ADD_MODAL') {
            dispatch(addItem(item))
            dispatch(editItem({}))
        } else if (modal.type === 'EDIT_MODAL') {
            dispatch(editList(item))
            let myInputs = document.getElementById('my-form').children
            for (let input of myInputs) {
                input.value = ''
            }
            dispatch(editItem({}))
        }

    }

    return (
        <div className='my-form m-2'>
            <form id='my-form'>
                <input placeholder='Produto' onChange={productChange} type='text' value={item.product}></input>
                <input placeholder='Quantidade' onChange={qtdChange} type='number' value={item.qtd}></input>
                <input placeholder='Preço' onChange={priceChange} type='text' value={item.price}></input>
                <button className='btn btn-outline-success btn-lg' onClick={addOrEditItemOnClick} data-dismiss="modal">{modal.button}</button>
            </form>
        </div>
    )
}

export default MyForm