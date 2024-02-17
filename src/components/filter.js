export default function Filter({ filter, setFilter }) {
    return (
        <div className="flex flex-col gap-3 w-full border-b border-black p-5">
            <p className="text-2xl">Filtrar:</p>
            <div className="flex justify-between w-full">
                <div>
                    <label className="text-xl">Status</label>
                    <select className="rounded max-w-xs w-full" value={filter} placeholder="  digite para pesquisar..." onChange={(e) => { setFilter(e.target.value) }}>
                        <option value="tudo">tudo</option>
                        <option value="completo">completo</option>
                        <option value="incompleto">incompleto</option>
                    </select>
                </div>
            </div>
        </div>
    )
}