import OrderCard from "../../../orders/components/OrderCard"

const orders = [{
    id: "1",
    folio: "O-20240521001",
    total: 300,
    date: "21/05/2024",
    hours: "12:55",
    client: "Hugo Ruiz",
    status: "open",
    statusClass: "order-open"
},{
    id: "2",
    folio: "O-20240521002",
    total: 150,
    date: "21/05/2024",
    hours: "14:06",
    client: "Samanta Hernandez",
    status: "cancelled",
    statusClass: "order-open"
},{
    id: "3",
    folio: "O-20240521003",
    total: 400,
    date: "21/05/2024",
    hours: "18:20",
    client: "Anahí Fernandez",
    status: "ready",
    statusClass: "order-open"
},{
    id: "4",
    folio: "O-20240521004",
    total: 400,
    date: "21/05/2024",
    hours: "22:20",
    client: "Anahí Fernandez",
    status: "close",
    statusClass: "order-open"
}];

const OrderListLayout = () => {
    return (
        <>
            <div className="mt-20 px-6 pt-8 pb-4 lg:px-10">
                <h2 className="font-bold text-2xl text-baby-black">Órdenes [80]</h2>

                <div className="w-full mt-5 grid gap-5 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
                    {orders.map(item =>
                        <OrderCard key={item.folio} props={item} />
                    )}
                </div>
            </div>
        </>
    )
}

export default OrderListLayout