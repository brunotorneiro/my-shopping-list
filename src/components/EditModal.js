import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setQtd, setPrice } from '../actions/itemAction'
import { editList } from '../actions/listAction'

function EditModal() {
    let item = useSelector(state => state.item)
    const dispatch = useDispatch()

    function productEditChange(e) {
        let value = e.target.value
        dispatch(setProduct(value))
    }

    function qtdEditChange(e) {
        let value = e.target.value
        dispatch(setQtd(value))
    }

    function priceEditChange(e) {
        let value = e.target.value
        dispatch(setPrice(value))
    }

    function editListOnClick(e) {
        e.preventDefault()
        dispatch(editList(item))
    }

    return (
        <div>
            <div className="modal fade" id="editItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title col-9" id="exampleModalLabel">Edição</h5>
                            <button type="button" className="close col-3" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Altere este item da lista de compras.
                </div>
                        <div className='simple-bar m-2'>
                            <form>
                                <input type='text' onChange={productEditChange} value={item.product}></input>
                                <input type='number' onChange={qtdEditChange} value={item.qtd}></input>
                                <input type='text' onChange={priceEditChange} value={item.price}></input>
                                <button className='btn btn-outline-success btn-lg' onClick={editListOnClick} data-dismiss="modal">Alterar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditModal