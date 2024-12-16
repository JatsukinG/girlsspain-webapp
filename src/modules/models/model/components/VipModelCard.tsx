import type {FC} from 'react'
import type {ModelNode} from '@/constants/types.ts'
import {clsx} from 'clsx'
import {useNavigate} from 'react-router'
import {FaCrown} from "react-icons/fa";

interface Props {
    model: ModelNode
}


const VIPModelCard: FC<Props> = ({model}) => {
    const navigate = useNavigate()

    return (
        <div
            className={clsx([
                'relative group w-full bg-neutral-800 aspect-[3/4] rounded-lg flex flex-col overflow-hidden font-serif',
                'hover:cursor-pointer',
                'border-4 border-yellow-600'
            ])}
            onClick={() => navigate(`/models/${model.id}`)}
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
                            <span className="text-yellow-600">Edad</span>
                            <span className="text-neutral-900">{model.age}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Alt.</span>
                            <span className="text-neutral-900">{model.height}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Peso</span>
                            <span className="text-neutral-900">{model.weight}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Ojos</span>
                            <span className="text-neutral-900">{model.eyesColor}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Pelo</span>
                            <span className="text-neutral-900">{model.hairColor}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Busto</span>
                            <span className="text-neutral-900">{model.measures[0]}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Cadera</span>
                            <span className="text-neutral-900">{model.measures[1]}</span>
                        </li>
                        <li className="flex flex-col items-center font-semibold text-sm opacity-0 group-hover:opacity-100 duration-700">
                            <span className="text-yellow-600">Nalga</span>
                            <span className="text-neutral-900">{model.measures[2]}</span>
                        </li>
                    </ul>
                    <p className="absolute bottom-full uppercase -mb-2 left-1/2 -translate-x-1/2 font-bold text-4xl opacity-0 group-hover:opacity-100 duration-300">
                        {model.firstName}
                    </p>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 p-4 bg-yellow-600 rounded-br-2xl text-white text-lg font-semibold uppercase tracking-wide flex items-center gap-2">
                <span className="text-2xl">
                   <FaCrown/>
                </span>
                VIP
            </div>
            <div
                className="absolute bottom-0 right-0 p-4 bg-yellow-600 rounded-tl-2xl text-white text-lg font-semibold uppercase tracking-wide flex items-center gap-2">
                {model.firstName}
            </div>
        </div>
    )
}

export default VIPModelCard