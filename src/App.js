import React from 'react';
import TotalBar from './components/TotalBar'
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import listReducer from './reducers/listReducer'
import MyBody from './components/MyBody';
import SimpleBar from './components/simpleBar';
import ItemReducer from './reducers/itemResucer';
import MyModal from './components/MyModal';
import EditModal from './components/EditModal';

const allReducers = combineReducers({ list: listReducer, item: ItemReducer })
const myStore = createStore(allReducers)

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <div className='container'>
          <MyModal><SimpleBar></SimpleBar></MyModal>
          <EditModal><SimpleBar></SimpleBar></EditModal>
          <div className="">
            <TotalBar></TotalBar>
            <MyBody></MyBody>
          </div>

        </div>

      </Provider>
    </div>
  );
}

export default App;
