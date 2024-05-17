import { Link } from "react-router-dom"
import Icon from "../../../shared/components/Icon"

const BagLayout = () => {
    return (
        <>
            <div className="mt-20 gap-4 pt-8 pb-4 px-10 flex flex-col md:flex-row">
                <div className="w-full basis-full lg:basis-2/3 bg-slate-400">
                    <h2 className="font-bold text-2xl text-primary-black">Bolsa de compras</h2>
                </div>
                <div className="w-full basis-full lg:basis-1/3 ">
                    <h2 className="font-bold text-base text-primary-black mb-5">Resumen</h2>

                    <div className="flex justify-between py-3">
                        <h4 className="text-base">Subtotal</h4>
                        <span className="text-base font-medium">$1200.00</span>
                    </div>

                    <div className="flex justify-between py-3 mb-10">
                        <h4 className="text-base">Desc.</h4>
                        <span className="text-base font-medium">$0.00</span>
                    </div>

                    <div className="w-full flex justify-between py-7 border-y">
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