import c1 from './cubook.jpg';
import c2 from './cuuniform.jpg';
import c3 from './cuimg4.jpg';
import c4 from './cuimg5.jpg'

const products = [
  {
    id: 1,
    name: 'College Uniform',
    href: '#',
    price: '1000',
    imageSrc: c2,
    imageAlt: 'uniform image',
  },
  {
    id: 2,
    name: 'Books',
    href: '#',
    price: '300',
    imageSrc: c1,
    imageAlt: 'books',
  },
  {
    id: 3,
    name: 'Spects',
    href: '#',
    price: '500',
    imageSrc: c3,
    imageAlt: 'image4',
  },
  {
    id: 4,
    name: 'Evehicle',
    href: '#',
    price: '300',
    imageSrc: c4,
    imageAlt: 'image5',
  },
  // More products...
]

export default function Example1() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div className="group">
              <div className="aspect-h-1 aspect-w-1 w-50 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-52 w-52 object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className=" mt-4 text-sm text-gray-700 no-underline ">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 no-underline">{product.price}rs</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-15 h-12">
  order now
</button>
            </div>
      
          ))}

        </div>
      </div>
    </div>
  )
}
