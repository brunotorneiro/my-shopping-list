import React from 'react'
import addItem from '../reducers/addItem'
import { useDispatch } from 'react-redux'

function MyNavBar (){
  const dispatch = useDispatch()
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#hide">LISTA DE COMPRAS</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#home" data-toggle='tab' role="tab" aria-controls="home" aria-selected="true">Início</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#changeded" data-toggle='tab' role="tab" aria-controls="changeded" aria-selected="false">Modificados</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#add" data-toggle='tab' role="tab" aria-controls="add" aria-selected="false">Adicionar</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Item" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
    )
}

export default MyNavBar