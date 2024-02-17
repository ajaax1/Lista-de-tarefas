import Search from "../components/search";
import Filter from "../components/filter"
import List from "../components/list"
import CreateTask from "@/components/createTask";
import React, { useState } from 'react';

export default function Home() {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(false)

  const addList = (text, category, id, status) => {
    const newItem = { text: text, category: category, id: id, status: status };
    const newList = [...list, newItem];
    setList(newList);
  };

  const deleteList = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('tudo');

  const toggleStatus = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, status: item.status = !item.status } : item
    );
    setList(newList);
  };
  return (
    <div className="w-full h-full flex justify-center font-sans font-medium">
      <main className="bg-slate-500 max-w-screen-md	 w-full flex flex-col items-center p-9 rounded-md">
        <h1 className="text-3xl">Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
        <div className="gap-3 w-full border-b border-black p-5">
          <ul className="flex w-full flex-col gap-2">
            {list.filter((list) => filter === "tudo" ? true : filter === 'completo' ? list.status : !list.status).filter((item) => item.text.toLowerCase().includes(search.toLowerCase())).map((item) => (
              <List key={item.id} item={item} deleteList={deleteList} toggleStatus={toggleStatus} />
            ))}
          </ul>
        </div>
        <CreateTask addList={addList} status={status} />
      </main>
    </div>
  );
}
