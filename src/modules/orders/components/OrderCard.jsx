import { Link } from "react-router-dom"

const OrderCard = () => {
    return (
        <>
            <Link to="/app/orders">
                <div className="border border-gray-200 p-5 rounded-md bg-white hover:shadow-md active:scale-105">
                    <div className="w-full flex">
                        <span className="order-open">Abierta</span>
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold tracking-wide">O-202409220001</h3>
                        <hr className="my-5" />
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-base font-medium text-secondary-gray pb-2">Fecha</span>
                                <span className="text-base font-medium text-secondary-gray pb-2">Hora</span>
                                <span className="text-base font-medium text-secondary-gray pb-2">Cliente</span>
                                <span className="text-base font-medium text-secondary-gray pb-2">Productos</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-base font-medium text-primary-black pb-2">10/08/2024</span>
                                <span className="text-base font-medium text-primary-black pb-2">12:59hrs</span>
                                <span className="text-base font-medium text-primary-black pb-2">Hugo Ruíz</span>
                                <span className="text-base font-medium text-primary-black pb-2">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default OrderCard