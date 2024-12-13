import type { FC } from 'react'
import type { ModelNode } from '../../main/constants/types.ts'

interface Props {
  model: ModelNode
}


const ModelResultCard: FC<Props> = ({ model }) => {
  return (
      <div className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-200">
        <img
            src={model.image}
            alt={`${model.firstName}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">{model.firstName}</h3>
          <p className="text-sm text-gray-500">{model.lastName}</p>
          <p className="mt-2 text-sm text-gray-700 line-clamp-3">{model.age}</p>
        </div>
      </div>
  )
}

export default ModelResultCard