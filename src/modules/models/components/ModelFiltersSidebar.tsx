import type { FC } from 'react'

const ModelFiltersSidebar: FC = () => {
  return (
      <aside className="sticky top-0 min-w-72 bg-neutral-700 p-6 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-semibold mb-4">Filtros</h3>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-fuchsia-500"/>
            Mujeres
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-fuchsia-500"/>
            Madrid
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-fuchsia-500"/>
            Barcelona
          </label>
          <button
              className="mt-4 bg-fuchsia-500 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition">
            Aplicar filtros
          </button>
        </div>
      </aside>
  )
}

export default ModelFiltersSidebar