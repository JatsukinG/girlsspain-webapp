import { useNavigate } from 'react-router'
import { TbGenderFemale } from 'react-icons/tb'
import { FaCity, FaSearch } from 'react-icons/fa'


const MainSearch = () => {
  const navigate = useNavigate()

  return (
      <section className="py-16 container flex flex-col items-center">
        <h2 className="text-4xl font-serif mb-6">
          Encuentra tu conexión en <span className="text-fuchsia-500 font-extrabold">Girls España</span>
        </h2>
        <p className="text-center max-w-2xl text-md mb-8">
          Descubre perfiles únicos cuidadosamente seleccionados, donde la autenticidad y la confianza son nuestra
          prioridad.
        </p>

        <div
            className="mt-8 w-full max-w-3xl bg-white shadow-xl rounded-lg p-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
              className="flex items-center gap-3 border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md transition duration-200">
            <TbGenderFemale className="text-fuchsia-400 text-2xl"/>
            <span className="text-gray-800 font-medium">Mujer</span>
          </div>
          <div
              className="flex items-center gap-3 border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md transition duration-200">
            <FaCity className="text-blue-400 text-2xl"/>
            <span className="text-gray-800 font-medium">Madrid</span>
          </div>
          <div
              className="flex items-center gap-3 border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md transition duration-200">
            <FaCity className="text-blue-400 text-2xl"/>
            <span className="text-gray-800 font-medium">Barcelona</span>
          </div>
        </div>

        <button
            onClick={() => navigate('/models')}
            className="mt-6 bg-fuchsia-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-fuchsia-600 transition duration-200 text-lg flex items-center gap-3">
          <FaSearch className="text-xl"/>
          <span>Iniciar Búsqueda</span>
        </button>
      </section>
  )
}

export default MainSearch