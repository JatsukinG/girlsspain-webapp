import type { ModelNode } from '@/constants/types.ts'
import { Transition } from '@headlessui/react'

const model: ModelNode = {
  id: 3,
  firstName: 'Lucía',
  lastName: 'Martínez',
  image: 'https://webdesign-finder.com/ubella/wp-content/uploads/2018/10/model_img_12-500x625.jpg',
  age: 22,
  height: '1.68m',
  weight: '55kg',
  eyesColor: 'Verdes',
  hairColor: 'Rubio',
  measures: [85, 58, 87],
}


const ModelInfo = () => {
  return (
      <section className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
                src={model.image}
                alt={`${model.firstName} ${model.lastName}`}
                className="object-cover w-full h-full"
            />
          </div>
          <Transition
              show
              appear
              enter="transition transform duration-500"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="transition transform duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-10"
          >
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <h1 className="text-3xl font-bold text-gray-800">
                {model.firstName} {model.lastName}
              </h1>
              <p className="text-gray-600 mt-4">
                Lucía es una modelo profesional de 22 años con características únicas que destacan por su belleza
                natural
                y estilo sofisticado. Ideal para sesiones fotográficas, eventos y pasarelas.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="text-gray-800 text-lg">
                  <strong>Edad:</strong> {model.age} años
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Altura:</strong> {model.height}
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Peso:</strong> {model.weight}
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Color de ojos:</strong> {model.eyesColor}
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Color de cabello:</strong> {model.hairColor}
                </li>
                <li className="text-gray-800 text-lg">
                  <strong>Medidas:</strong> {model.measures.join('-')}
                </li>
              </ul>
              <button
                  className="mt-6 bg-fuchsia-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-fuchsia-600 transition">
                Contactar a Lucía
              </button>
            </div>
          </Transition>
        </div>
      </section>
  )
}

export default ModelInfo