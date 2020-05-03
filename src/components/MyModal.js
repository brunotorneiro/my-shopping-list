import React from 'react';

function MyModal (props) {
    return (
        <div>
            <div className='row bg-dark text-light justify-content-between p-2'>
                <h3 className='col-10 align-self-center'>Lista</h3>
                <button type="button" className="col-2 btn btn-outline-light btn-lg" data-toggle="modal" data-target="#addItem">+</button>    
            </div>
            

            <div className="modal fade" id="addItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title col-9" id="exampleModalLabel">ADICIONE</h5>
                    <button type="button" className="close col-3" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Adicione um item na lista de compras.
                </div>
                    {props.children}
                </div>
            </div>
            </div>            
        </div>

    )
}

export default MyModal