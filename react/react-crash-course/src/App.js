import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from'./components/Counter.jsx'
import React, { useState } from 'react';

function App() {
  return <Counter />

  const [showModal, setShowModal] = useState(false)
  return (
    <div className="App">
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"/>
        <Todo title="Finish Interview Section"/>
        <Todo title="Land a $100k job"/>
      </div>
    {showModal ? <Modal text="Confirm Delete" /> : null}
    </div>
  );
}

export default App;
