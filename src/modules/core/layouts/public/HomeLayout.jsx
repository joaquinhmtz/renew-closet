const products =[
      {
        "_id": "1",
        "name": "T-shirt",
        "price": "20.00",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/tshirt.jpg"
      },
      {
        "_id": "2",
        "name": "Jeans",
        "price": "50.00",
        "size": "L",
        "status": "almost_yours",
        "cover_photo": "https://example.com/jeans.jpg"
      },
      {
        "_id": "3",
        "name": "Dress",
        "price": "80.00",
        "size": "S",
        "status": "separate",
        "cover_photo": "https://example.com/dress.jpg"
      },
      {
        "_id": "4",
        "name": "Sweater",
        "price": "45.00",
        "size": "XL",
        "status": "available",
        "cover_photo": "https://example.com/sweater.jpg"
      },
      {
        "_id": "5",
        "name": "Skirt",
        "price": "35.00",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/skirt.jpg"
      },
      {
        "_id": "6",
        "name": "Shirt",
        "price": "30.00",
        "size": "L",
        "status": "separate",
        "cover_photo": "https://example.com/shirt.jpg"
      },
      {
        "_id": "7",
        "name": "Jacket",
        "price": "70.00",
        "size": "S",
        "status": "separate",
        "cover_photo": "https://example.com/jacket.jpg"
      },
      {
        "_id": "8",
        "name": "Pants",
        "price": "55.00",
        "size": "XL",
        "status": "almost_yours",
        "cover_photo": "https://example.com/pants.jpg"
      },
      {
        "_id": "9",
        "name": "Blouse",
        "price": "25.00",
        "size": "M",
        "status": "separate",
        "cover_photo": "https://example.com/blouse.jpg"
      },
      {
        "_id": "10",
        "name": "Coat",
        "price": "90.00",
        "size": "L",
        "status": "almost_yours",
        "cover_photo": "https://example.com/coat.jpg"
      }
    ];

import { Link } from "react-router-dom";
import ProductCard from "../../../products/components/public/ProductCard";

const HomeLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h1 className="font-bold text-2xl text-primary-black">Lo más nuevo para ella</h1>

                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center justify-center mb-20">
                    {products.map(item => 
                      <ProductCard key={item.name} props={item} />
                    )}
                </section>
            </div>
        </>
    )
}

export default HomeLayout