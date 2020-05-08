import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import listReducer from './redux/listReducer'
import ItemReducer from './redux/itemResucer';
import modalReducer from './redux/modalReducer';
import TotalBar from './components/TotalBar'
import MyBody from './components/MyBody';
import SimpleBar from './components/MyForm';
import MyModal from './components/MyModal';

const allReducers = combineReducers({
  list: listReducer,
  item: ItemReducer,
  modal: modalReducer
})
const myStore = createStore(allReducers)

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <div className='container-fluid'>
          <MyModal><SimpleBar></SimpleBar></MyModal>
        </div>
        <div className="container">
          <TotalBar></TotalBar>
          <MyBody></MyBody>
        </div>
      </Provider>
    </div>
  );
}

export default App;
