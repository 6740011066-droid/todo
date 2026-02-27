'use client'
import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result.slice(0, 5));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [url]);

  const addItem = async (title: string) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        completed: false,
        userId: 1,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const newItem = await res.json();
    setData((prev) => [newItem, ...prev]);
  };

  return { data, addItem };
}

interface Todo {
  id: number;
  title: string;
}

const IndexPage = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data: todos, addItem } = useFetch<Todo>(url);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim()) {
      addItem(inputText);
      setInputText("");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Todo Call API</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="ระบุสิ่งที่ต้องทำ..."
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '5px' }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;