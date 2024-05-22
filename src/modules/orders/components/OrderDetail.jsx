import { Link } from "react-router-dom";
import Icon from "../../shared/components/Icon"
import BagProductCard from "../../products/components/public/BagProductCard"
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

const OrderDetail = () => {
    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10">
                <div className="w-full flex items-center justify-end mb-4">
                    <Link to="/app/orders" className="hover:bg-[#dbe2e9] p-2 rounded-md">
                        <Icon name={"faArrowLeftLong"} styleClass={"mr-3 text-baby-black"} size={"lg"}></Icon> 
                        <span className="font-regular text-baby-black">Volver</span>
                    </Link>
                </div>
                <section className="w-full flex flex-col md:flex-row gap-10 justify-center mb-20"> 
                    <div className="border border-gray-200 rounded-md bg-white w-full basis-full lg:basis-2/3">
                        <div className="w-full flex items-center">
                            <h3 className="text-xl font-medium text-baby-black pt-5 px-5">Órden: O-202405120001</h3>
                            <span className={`order open mt-5`}>Abierta</span>
                        </div>
                        <span className="text-sm font-normal text-secondary-gray tracking-wide pb-2 pl-5 mb-3">Pedido por: </span>
                        <span className="text-sm font-medium text-secondary-gray tracking-wide pb-2 mb-3">Samanta Sanchez</span>
                        <section className="w-full px-5 mt-10">
                            <ul className="mt-5">
                                {products.map(item =>
                                    <li key={item._id} className="w-full mb-5">
                                        <BagProductCard props={item} />
                                    </li>
                                )}
                            </ul>
                        </section>
                    </div>
                    <div className="border border-gray-200 rounded-md bg-white w-full basis-full lg:basis-1/3 pb-16">
                        <h3 className="text-xl font-medium text-baby-black p-5">Resumen</h3>
                        <hr />
                        <div className="flex justify-between mt-5 px-5">
                            <h4 className="text-sm text-baby-black">Subtotal</h4>
                            <span className="text-sm font-medium text-baby-black">$1200.00</span>
                        </div>
                        <div className="flex justify-between pt-3 px-5 mb-5">
                            <h4 className="text-sm text-baby-black">Desc.</h4>
                            <span className="text-sm font-medium text-baby-black">$0.00</span>
                        </div>
                        <hr />
                        <div className="w-full flex justify-between py-5 px-5">
                            <h4 className="text-base font-medium text-baby-black">Total</h4>
                            <span className="text-xl font-semibold text-baby-black">$1200.00</span>
                        </div>
                        <hr />
                        <div className="w-full flex py-3 px-5 space-y-6">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input id="payed" name="payed" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="payed" className="font-regular text-baby-black">
                                        Se efectuó el pago
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col px-5 justify-center items-center mt-32 lg:mt-20">
                            <button className="inline-block transition duration-200 ease-in-out bg-primary-black w-[300px] h-[55px] text-slate-50 rounded-md hover:bg-[#172023] active:scale-105">
                                Listo para entregar <Icon name={"faTruck"} styleClass={"ml-2"} size={"sm"} />
                            </button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default OrderDetail