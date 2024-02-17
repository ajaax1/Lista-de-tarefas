import React, { useState } from 'react';

export default function Search({search,setSearch}) {
    return (
        <div className="flex flex-col gap-3 w-full border-b border-black p-5">
            <label htmlFor="searchInput" className="text-2xl">Pesquisar:</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)} id="searchInput" className="rounded" placeholder="  digite para pesquisar..."></input>
        </div>
    )
}
