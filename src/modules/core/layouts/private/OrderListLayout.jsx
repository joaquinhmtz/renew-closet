import OrderCard from "../../../orders/components/OrderCard"

const OrderListLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h2 className="font-bold text-2xl text-primary-black">Órdenes [80]</h2>

                <div className="w-full mt-5 grid gap-5 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            </div>
        </>
    )
}

export default OrderListLayout