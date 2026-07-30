import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import React, { useState, useEffect } from 'react'
// import Counter from './components/Counter.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }

  function cancelModal() {
    setShowModal(false)
  }

  function confirmModal() {
    setShowModal(false)
  }

  useEffect(() => {
    console.log(`ONLY on mount AND on ${showModal} change`)
  }, [showModal])

  useEffect(() => {
    console.log('on mount')
  }, [showModal])

  useEffect(() => {
    console.log('EVERY render')
  })

  return (
    <div className="App">
      <Title/>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
        <Todo onTodoDelete={onTodoDelete}  title="Finish interview section"/>
        <Todo onTodoDelete={onTodoDelete} title="land a $100k job"/>
      </div>
      {showModal && <Modal 
      cancelModal={cancelModal} 
      confirmModal={confirmModal} 
      confirm="Confirm Delete?"/>}
    </div>
  );
}

export default App;
