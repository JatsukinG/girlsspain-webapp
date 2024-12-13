import NiceModal from '@ebay/nice-modal-react'
import ModelImagesModal from '@models/model/components/ModelImagesModal.tsx'

interface Image {
  id: number
  url: string
}

const images: Image[] = [
  {
    id: 1,
    url: '/images/models/image1.jpg',
  },
  {
    id: 2,
    url: '/images/models/image2.jpg',
  },
  {
    id: 3,
    url: '/images/models/image3.jpg',
  },
  {
    id: 4,
    url: '/images/models/image4.jpg',
  },
  {
    id: 5,
    url: '/images/models/image5.jpg',
  },
]


const ModelImages = () => {
  return (
      <section className="container">
        <div className="columns-3 gap-4 space-y-4">
          {
            images.map(image => (
                <img
                    key={image.id}
                    alt={image.id.toString()}
                    src={image.url}
                    onClick={() => NiceModal.show(ModelImagesModal)}
                    className="w-full rounded-lg hover:cursor-pointer hover:brightness-75 duration-300"
                />
            ))
          }
        </div>
      </section>
  )
}

export default ModelImages