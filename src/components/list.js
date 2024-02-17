import React, { useState } from 'react';

export default function List({ item, deleteList, toggleStatus }) {

    function handleToggleStatus() {
        toggleStatus(item.id);
    }

    function handleDelete() {
        deleteList(item.id);
    }

    return (
        <li className={`${item.status ? 'bg-lime-200' : 'bg-white'} flex w-full justify-between  p-5 rounded-md`}>
            <div>
                <h3 className={`${item.status ? 'line-through' : ''} text-xl`}>{item.text}</h3>
                <p className={`${item.status ? 'line-through' : ''} text-slate-600`}>{item.category}</p>
            </div>
            <div className="flex gap-3">
                <button onClick={handleToggleStatus} className='bg-green-700 hover:bg-green-600 text-white font-bold py-1 px-2 rounded'>Completar</button>
                <button onClick={handleDelete} className="bg-red-700 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">X</button>
            </div>
        </li>
    );
}
