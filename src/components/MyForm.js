import React from 'react'
import { addItem } from '../redux/listAction'
import { useDispatch, useSelector } from 'react-redux'
import { setQtd, setPrice, setProduct, editItem } from '../redux/itemAction'

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
        dispatch(setPrice(value))
    }

    function addOrEditItemOnClick(e) {
        e.preventDefault()
        if (modal.type === 'ADD_MODAL') {
           return dispatch(addItem(item)) 
        }else if (modal.type === 'EDIT_MODAL'){
            return dispatch(editItem(item))
        }
        
    }

    return (
        <div className='simple-bar m-2'>
            <form>
                <input placeholder='Produto' onChange={productChange} type='text'></input>
                <input placeholder='Quantidade' onChange={qtdChange} type='number'></input>
                <input placeholder='Preço' onChange={priceChange} type='text'></input>
                <button className='btn btn-outline-success btn-lg' onClick={addOrEditItemOnClick} data-dismiss="modal">{modal.button}</button>
            </form>
        </div>
    )
}

export default MyForm