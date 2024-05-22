import Icon from "../../shared/components/Icon"

const OrderDetail = () => {
    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10">
                <div>Volver--</div>
                <section className="w-full flex flex-col md:flex-row gap-5 justify-center mb-20"> 
                    <div className="border border-gray-200 p-5 rounded-md bg-white w-full basis-full lg:basis-2/3">order</div>
                    <div className="border border-gray-200 rounded-md bg-white w-full basis-full lg:basis-1/3 lg:border-l pb-16">
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