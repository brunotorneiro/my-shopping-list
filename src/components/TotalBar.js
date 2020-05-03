import React from 'react'
import {myTotal, myRest} from '../fuctionsLists'
import {useSelector} from 'react-redux'

function TotalBar () {
    const [total, rest] = useSelector((state=>[myTotal(state.list), myRest(state.list, 175)]))
    return (
        <div className='action-bar'>
        <p>TOTAL: {total}</p>
        <p>Restante: {rest}</p>
        </div>
    )
}

export default TotalBar