import { useState } from "react";
import { Link } from "react-router-dom";
import imgProduct from "./../../../../assets/t-shirt.png";
import Icon from "../../../shared/components/Icon";


const DetailProduct = () => {

    const [product, setProduct] = useState({
        "_id": "1",
        "name": "T-shirt",
        "price": "20.00",
        "brand": "Tommy Hilfiger",
        "size": "M",
        "status": "available",
        "cover_photo": "https://example.com/tshirt.jpg"
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
                            <h2 className="font-semibold text-2xl text-primary-black">{product.name}</h2>
                            <Icon name={"faHeart"} styleClass={""} size={"xl"} />
                        </div>

                        <p className="text-secondary-gray text-base font-light pt-4">{product.brand}</p>
                        <p className="text-base font-medium pt-4">Talla: {product.size}</p>
                        <p className="text-2xl font-medium pt-16">${product.price}</p>

                        <div className="w-full flex flex-col justify-center items-center mt-32 lg:mt-52">
                            <button className="bg-primary-black w-[300px] h-[55px] text-slate-50 rounded-md hover:bg-[#172023] active:scale-105">
                                Añadir <Icon name={"faBagShopping"} styleClass={"ml-2"} size={"md"} />
                            </button>
                            <p className="pt-2">ó</p>
                            <Link to="/" className="underline text-sm text-sky-600 hover:text-sky-700">
                                Seguir comprando
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DetailProduct