import React, { useState } from 'react'
import deleteBtn from './Assets/delete.svg'
import updateBtn from './Assets/upate.svg'

const App = () => {
  const [todoMsg, setTodoMsg] = useState('')
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const [isActive, setisActive] = useState(false)
  const [btn, setBtn] = useState('Add')
  const [activeId, setActiveId] = useState(null)

  function submit(e) {
    e.preventDefault()
    if (!activeId) {
      todos.push({ id, todo: todoMsg, completed: false })
      setId(id + 1)
    } else {
      setTodos(todos.map(todo => todo.id == activeId ? { ...todo, todo: todoMsg } : todo))
      setisActive(false)
      setActiveId(null)
      setBtn('Add')
    }
    setTodoMsg('')
  }

  function deleteTodo(todoId) {
    setTodos(() => todos.filter(todo => todo.id != todoId))
  }

  function getTodoById(todoId) {
    setTodoMsg(todos.find(todo => todo.id == todoId).todo)
    setisActive(true)
    setBtn('Edit')
    setActiveId(todoId)
  }

  function check(el) {
    if (!activeId) setTodos(todos.map(todo => todo.id == el.id ? { ...todo, completed: !todo.completed } : todo))
    else alert('Update Todo first')
  }

  return (
    <main className='px-4 md:px-6 xl:px-72 py-3 space-y-3 sm:w-4/5 md:w-2/3 xl:w-[1440px] mx-auto'>
      <h1 className='text-center'>Todo List</h1>

      <form className='gap-x-3 flex' onSubmit={submit}>
        <input type="text" className='border border-gray-300 rounded-md px-3 py-1 md:py-3 w-full' placeholder='Enter todo here' value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} required />
        <button type='submit' className='rounded-md px-4 md:px-8 xl:px-16 bg-gray-700 text-white hover:bg-gray-800'>{btn}</button>
      </form>

      <section>
        <ul className='space-y-1'>
          {todos.map((el, i) => (<li key={el.id} className={`flex justify-between items-center bg-gray-100 p-2 md:px-4 ${el.completed ? 'line-through' : ''}`}>
            <div className='flex gap-x-1 items-center'>
              <input type="checkbox" name={`task${i}`} id={`task${i}`} checked={el.completed} onChange={() => check(el)} />
              <label htmlFor={`task${i}`}>{el.todo}</label>
            </div>
            <div className='space-x-3'>
              <button className='disabled:brightness-50' onClick={() => deleteTodo(el.id)} disabled={isActive || el.completed}><img src={deleteBtn} alt="deleteBtn" /></button>
              <button className='disabled:brightness-50' onClick={() => getTodoById(el.id)} disabled={isActive || el.completed}><img src={updateBtn} alt="UpdateBtn" /></button>
            </div>
          </li>))}
        </ul>
      </section>
    </main>
  )
}

export default App