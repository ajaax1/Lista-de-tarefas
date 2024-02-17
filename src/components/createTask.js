import React, { useState } from 'react';
export default function CreateTask({ addList, status }) {
    const [inputTask, setInputTask] = useState();
    const [inputSelect, setInputSelect] = useState();
    function handleSubmite(e) {
        e.preventDefault();
        if (!inputTask || !inputSelect) return;
        const id = Math.floor(Math.random() * 1000000);
        const stats = status
        addList(inputTask, inputSelect, id, stats);
        setInputSelect("");
        setInputTask("");
    }
    return (
        <div className="gap-3 w-full border-b border-black p-5 flex flex-col">
            <h2 className="text-2xl">Criar tarefa:</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmite} >
                <input value={inputTask} className="rounded" onChange={(e) => setInputTask(e.target.value)} placeholder=" ..."></input>
                <select value={inputSelect} onChange={(e) => setInputSelect(e.target.value)} >
                    <option value="">Selecionar</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Tarefas">Tarefas</option>
                </select>
                <input
                    type="submit"
                    className="max-w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    value="Criar tarefa"
                />
            </form>
        </div >
    )
}