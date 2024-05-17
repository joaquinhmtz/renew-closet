import { useState } from "react";
import { Link } from "react-router-dom";
import imgProduct from "./../../../../assets/t-shirt.png";
import CarrouselProductCard from "../../../products/components/public/CarrouselProductCard";
import Icon from "../../../shared/components/Icon";
import StatusTag from "../../../shared/components/StatusTag";

const products = [{
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
}]


const DetailProduct = () => {

    const [product, setProduct] = useState({
        "_id": "1",
        "name": "T-shirt",
        "price": "20.00",
        "brand": "Tommy Hilfiger",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/tshirt.jpg",
        "colors": { "text": "text-green", "bg" : "bg-baby-green", "circle" : "text-grand-green" }
    });

    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <section className="w-full grid md:grid-cols-2 gap-10 lg:gap-14 justify-center mb-20">
                    <div className="w-full flex min-h-96 lg:min-h-[600px] bg-gray-400">
                        <img className="w-full object-cover" src={imgProduct} alt="profile-picture" />
                    </div>
                    <div className="w-full min-h-96">
                        <div className="w-full flex justify-between">
                            <div className="w-full flex items-center">
                                <h2 className="font-semibold text-2xl text-primary-black mr-5">{product.name}</h2>
                                <StatusTag status={product.status} colors={product.colors}/>
                            </div>
                            <Icon name={"faHeart"} styleClass={""} size={"xl"} />
                        </div>

                        <p className="text-secondary-gray text-base font-light pt-4">{product.brand}</p>
                        <p className="text-base font-medium pt-4">Talla: {product.size}</p>
                        <p className="text-2xl font-medium pt-16">${product.price}</p>


                        <div className="w-full flex flex-col justify-center items-center mt-32 lg:mt-52">
                            <button className="inline-block transition duration-200 ease-in-out bg-primary-black w-[300px] h-[55px] text-slate-50 rounded-md hover:bg-[#172023] active:scale-105">
                                Añadir <Icon name={"faBagShopping"} styleClass={"ml-2"} size={"sm"} />
                            </button>
                            <p className="pt-2">ó</p>
                            <Link to="/" className="underline text-sm text-sky-600 hover:text-sky-700">
                                Seguir comprando
                            </Link>
                        </div>
                    </div>
                </section>
                <h2 className="font-bold text-2xl text-primary-black">También podrían gustarte</h2>
                <section className="w-full mb-20 mt-10">
                    <ul className="flex overflow-y-auto">
                        {products.map(item => 
                            <li key={item._id} className="slider slider-opt md:md-slider-opt xl:lg-slider-opt"> 
                                <CarrouselProductCard props={item} />
                            </li>
                        )}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default DetailProduct