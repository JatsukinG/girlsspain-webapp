import models from '../../modules/main/constants/models.json'
import ModelFiltersSidebar from '../../modules/models/components/ModelFiltersSidebar.tsx'
import ModelCard from '../../modules/main/components/ModelCard.tsx'


const ModelsPage = () => {
  return (
      <section className="py-8 container flex gap-8">
        <ModelFiltersSidebar/>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4">Resultados de la búsqueda</h2>
          {models.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {models.map(model => (
                    <ModelCard
                        key={model.id}
                        model={model}
                    />
                ))}
              </div>
          ) : (
              <p className="text-gray-500">No se encontraron resultados.</p>
          )}
        </div>
      </section>
  )
}

export default ModelsPage
