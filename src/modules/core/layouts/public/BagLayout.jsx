import { Link } from "react-router-dom"
import imgProduct from "./../../../../assets/t-shirt.png"
import Icon from "../../../shared/components/Icon"

const products = [{
    "_id": "1",
    "name": "T-shirt",
    "price": "20.00",
    "brand": "Zara",
    "size": "M",
    "status": "available",
    "cover_photo": "https://example.com/tshirt.jpg"
  },
  {
    "_id": "2",
    "name": "Jeans",
    "price": "50.00",
    "brand": "Zara",
    "size": "L",
    "status": "almost_yours",
    "cover_photo": "https://example.com/jeans.jpg"
  },
  {
    "_id": "3",
    "name": "Dress",
    "price": "80.00",
    "brand": "Zara",
    "size": "S",
    "status": "separate",
    "cover_photo": "https://example.com/dress.jpg"
  },
  {
    "_id": "4",
    "name": "Sweater",
    "price": "45.00",
    "brand": "Zara",
    "size": "XL",
    "status": "available",
    "cover_photo": "https://example.com/sweater.jpg"
}];

const BagLayout = () => {
    return (
        <>
            <div className="mt-20 gap-4 pt-8 pb-20 px-10 flex flex-col md:flex-row mb-10">
                <div className="w-full basis-full lg:basis-2/3">
                    <h2 className="font-bold text-2xl text-primary-black">Bolsa de compras</h2>

                    <section className="w-full">
                        <ul className="mt-5">
                            {products.map(item =>
                                <li key={item._id} className="w-full mb-5">
                                    <div className="w-full flex justify-between">
                                        <div className="w-full flex gap-3">
                                            <div className="basis-40">
                                                <div className="w-full bg-slate-300">
                                                    <img src={imgProduct} alt="" />
                                                </div>
                                            </div>
                                            <div className="basis-2/3">
                                                <h2 className="font-medium text-base text-primary-black">{item.name}</h2>
                                                <p className="text-secondary-gray text-base font-light pt-0.5">{item.brand}</p>
                                                <p className="text-secondary-gray text-base font-light pt-0.5">Talla: {item.size}</p>
                                                <p className="text-primary-black font-medium text-base pt-0.5">${item.price}</p>
                                            </div>
                                        </div>
                                        <Icon name={"faTrash"} styleClass={"lg:pr-5"} size={"lg"} />
                                    </div>
                                </li>
                            )}
                        </ul>
                    </section>

                </div>
                <div className="w-full basis-full lg:basis-1/3 lg:border-l lg:pl-5">
                    <h2 className="font-bold text-base text-primary-black mb-5">Resumen</h2>

                    <div className="flex justify-between py-3">
                        <h4 className="text-base">Subtotal</h4>
                        <span className="text-base font-medium">$1200.00</span>
                    </div>

                    <div className="flex justify-between py-3 mb-5">
                        <h4 className="text-base">Desc.</h4>
                        <span className="text-base font-medium">$0.00</span>
                    </div>

                    <div className="w-full flex justify-between py-5 border-y">
                        <h4 className="text-base">Total</h4>
                        <span className="text-base font-medium">$1200.00</span>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-32 lg:mt-52">
                        <button className="inline-block transition duration-200 ease-in-out bg-primary-black w-[300px] h-[55px] text-slate-50 rounded-md hover:bg-[#172023] active:scale-105">
                            Generar QR <Icon name={"faQrcode"} styleClass={"ml-2"} size={"sm"} />
                        </button>
                        <p className="pt-2">ó</p>
                        <Link to="/" className="underline text-sm text-sky-600 hover:text-sky-700">
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BagLayout