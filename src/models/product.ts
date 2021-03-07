export interface ProductModel {
  images: ImageModel[]
  janCode: string
  name: string
  description: DescriptionModel | null
  size: string
  weight: string
  createdAt: string
  releaseDate: string
  price: number
  category: string
  brand: string
}

interface ImageModel {
  file: {
    url: string
  }
}

interface DescriptionModel {
  id: string
  description: string
}
