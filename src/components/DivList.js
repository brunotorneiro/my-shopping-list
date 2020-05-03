import React from 'react'
import { myBRL } from '../fuctionsLists'
import { editItem } from '../reducers/itemAction'
import { useSelector, useDispatch } from 'react-redux'

function DivList() {
  const dispatch = useDispatch()
  const list = useSelector(state => state.list)

  function setItem(e) {
    const id = e.target.parentElement.id
    let line = list.filter(line => line.id.toString() === id)[0]
    console.log(line)
    dispatch(editItem(line))
  }

  return (
    <table className="table table-bordered table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Produtos</th>
          <th scope="col">Qtd</th>
          <th scope="col">Preço</th>
          <th scope="col">Custo</th>
        </tr>
      </thead>
      <tbody>{list.map((line) => {
        return (
          <tr id={line.id} onClick={setItem} key={line.id} data-toggle="modal" data-target="#editItem">
            <td className="align-middle">{line.product}</td>
            <td className="align-middle text-center">{line.qtd}</td>
            <td className="align-middle text-right">{myBRL(line.price)}</td>
            <td className="align-middle text-right">{myBRL(line.qtd * line.price)}</td>
          </tr>)
      })}
      </tbody>
    </table>
  )
}

export default DivList