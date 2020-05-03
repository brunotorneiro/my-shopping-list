import React from 'react'
import DivList from './DivList'

function MyBody () {
    return (
    <div className='tab-content'>
        <div className="tab-pane fade show active" id='home' role="tabpanel" aria-labelledby="home-tab"><DivList></DivList></div>        
        <div className='tab-pane fade' id='changeded' role="tabpanel" aria-labelledby="changeded-tab">Modificados</div>
        <div className='tab-pane fade' id='add' role="tabpanel" aria-labelledby="add-tab">Adicionados</div>
    </div>
)}

export default MyBody