import type { FC } from 'react'
import type { ModelNode } from '@/constants/types.ts'

interface Props {
  model: ModelNode
}


const ModelCard: FC<Props> = ({ model }) => {
  return (
      <div
          className="relative group w-full bg-neutral-800 aspect-[3/4] rounded-lg flex flex-col overflow-hidden font-serif"
      >
        {/*Model image*/}
        <img
            alt="model"
            src={model.image}
            className="relative w-full flex-grow object-cover"
        />
        {/*Transparent black background*/}
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 duration-300"/>
        {/*Model details*/}
        <div className="absolute bottom-0 w-full h-0 flex group-hover:h-40 ease-in-out duration-300">
          <div className="flex-1 relative bg-white flex flex-col items-center">
            <p className="font-semibold uppercase text-xl text-neutral-900">
              {model.lastName}
            </p>
            <ul className="py-2 px-4 list-none flex flex-wrap items-center justify-center gap-4">
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Edad</span>
                <span className="text-neutral-900">{model.age}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Alt.</span>
                <span className="text-neutral-900">{model.height}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Peso</span>
                <span className="text-neutral-900">{model.weight}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Ojos</span>
                <span className="text-neutral-900">{model.eyesColor}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Pelo</span>
                <span className="text-neutral-900">{model.hairColor}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Busto</span>
                <span className="text-neutral-900">{model.measures[0]}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Cadera</span>
                <span className="text-neutral-900">{model.measures[1]}</span>
              </li>
              <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                <span className="text-fuchsia-500">Nalga</span>
                <span className="text-neutral-900">{model.measures[2]}</span>
              </li>
            </ul>
            <p className="absolute bottom-full uppercase -mb-2 left-1/2 -translate-x-1/2 font-bold text-4xl opacity-0 group-hover:opacity-100 duration-300">
              {model.firstName}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ModelCard