const products =[
      {
        "name": "T-shirt",
        "price": "20.00",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/tshirt.jpg"
      },
      {
        "name": "Jeans",
        "price": "50.00",
        "size": "L",
        "status": "almost_yours",
        "cover_photo": "https://example.com/jeans.jpg"
      },
      {
        "name": "Dress",
        "price": "80.00",
        "size": "S",
        "status": "separate",
        "cover_photo": "https://example.com/dress.jpg"
      },
      {
        "name": "Sweater",
        "price": "45.00",
        "size": "XL",
        "status": "available",
        "cover_photo": "https://example.com/sweater.jpg"
      },
      {
        "name": "Skirt",
        "price": "35.00",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/skirt.jpg"
      },
      {
        "name": "Shirt",
        "price": "30.00",
        "size": "L",
        "status": "separate",
        "cover_photo": "https://example.com/shirt.jpg"
      },
      {
        "name": "Jacket",
        "price": "70.00",
        "size": "S",
        "status": "separate",
        "cover_photo": "https://example.com/jacket.jpg"
      },
      {
        "name": "Pants",
        "price": "55.00",
        "size": "XL",
        "status": "almost_yours",
        "cover_photo": "https://example.com/pants.jpg"
      },
      {
        "name": "Blouse",
        "price": "25.00",
        "size": "M",
        "status": "separate",
        "cover_photo": "https://example.com/blouse.jpg"
      },
      {
        "name": "Coat",
        "price": "90.00",
        "size": "L",
        "status": "almost_yours",
        "cover_photo": "https://example.com/coat.jpg"
      }
    ];

import ProductCard from "../../../products/components/public/ProductCard";

const HomeLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h1 className="font-bold text-2xl">Lo más nuevo para ella</h1>

                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center justify-center">
                    {products.map(item => 
                        <ProductCard key={item.name} props={item} />
                    )}
                </section>
            </div>
        </>
    )
}

export default HomeLayout