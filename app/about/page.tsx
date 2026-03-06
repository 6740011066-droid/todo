"use client"
import { useState, useEffect } from 'react'

// UI ส่วนฟอร์มเพิ่มข้อมูล
const TodoForm = ({ onAdd }: { onAdd: (title: string) => void }) => {
  const [todo, setTodo] = useState('')
  const handleAddTodo = () => {
    if (todo.trim()) {
      onAdd(todo)
      setTodo('')
    }
  }
  return (
    <div className="flex gap-2 mb-4">
      <input 
        type="text" 
        className="border p-2 rounded-lg flex-1" 
        onChange={(e) => setTodo(e.target.value)} 
        value={todo}
        placeholder="เพิ่มรายการใหม่..."
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAddTodo}>Add</button>
    </div>
  )
}

// UI ส่วนรายการและการลบ
const TodoList = ({ todos, onDelete }: { todos: any[], onDelete: (id: number) => void }) => {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
          {todo.title}
          <button className="text-red-500 font-bold" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

// หน้าหลัก
const IndexPage = () => {
  const [todos, setTodos] = useState([])

 const fetchTodos = async () => {
  try {
    const res = await fetch('/api/todo', { cache: 'no-store' }); [cite: 725, 727]
    if (!res.ok) throw new Error('Network response was not ok');
    const data: Todo[] = await res.json(); [cite: 730]
    setTodos(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  useEffect(() => { fetchTodos() }, [])

  const addTodo = async (title: string) => {
    await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ title })
    })
    fetchTodos() // โหลดข้อมูลใหม่ 
  }

  const deleteTodo = async (id: number) => {
    await fetch('/api/todo', {
      method: 'DELETE',
      body: JSON.stringify({ id })
    })
    fetchTodos() // โหลดข้อมูลใหม่ 
  }

  return (
    <div className="p-10 max-w-md mx-auto border mt-10 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">My TodoApp (MySQL)</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default IndexPage