import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalAdd } from '../redux/modalAction';

function MyModal(props) {
    const modal = useSelector(state => state.modal)
    const dispatch = useDispatch()
    return (
        <div>
            <div className='row bg-dark text-light justify-content-between p-3'>
                <h3 className='col-10 align-self-center'>Lista</h3>
                <button type="button" className="col-2 btn btn-outline-light btn-lg" 
                onClick={()=>dispatch(modalAdd)}
                data-toggle="modal" data-target="#my-modal">+</button>
            </div>


            <div className="modal fade" id="my-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title col-9" id="exampleModalLabel">{modal.title}</h5>
                            <button type="button" className="close col-3" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {modal.description}
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyModal