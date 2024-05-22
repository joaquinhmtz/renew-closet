import { Link } from "react-router-dom"
import Icon from "../../shared/components/Icon"

const OrderCard = ({ props }) => {

    return (
        <>
            <Link to="/app/orders">
                <div className="border border-gray-200 p-5 rounded-md bg-white hover:shadow-md active:scale-105">
                    
                    <div className="">
                        <div className="w-full flex justify-between">
                            <h3 className="text-xl text-baby-black font-medium tracking-wide">{props.folio}</h3>
                            <span className={`order ${props.status}`}>{props.status}</span>
                        </div>
                        <span className="text-sm font-normal text-secondary-gray tracking-wide pb-2 mb-3">{props.date} - {props.hours} hrs</span>
                        <hr className="mt-3 mb-4" />
                        <div className="text-sm font-medium text-baby-black tracking-wide pb-2">{props.client}</div>
                        <div className="flex items-center">
                            <Icon name={"faCircleCheck"} styleClass={"mr-2 text-green"} size={"sm"}></Icon>
                            <span className="text-sm font-normal text-green tracking-wide">Pagado</span>
                        </div>
                        <div className="flex items-center">
                            <Icon name={"faTriangleExclamation"} styleClass={"mr-2 text-secondary-gray"} size={"sm"}></Icon>
                            <span className="text-sm font-normal text-secondary-gray tracking-wide">Devolución</span>
                        </div>
                        <div className="flex items-center">
                            <Icon name={"faTruck"} styleClass={"mr-2 text-secondary-gray"} size={"sm"}></Icon>
                            <span className="text-sm font-normal text-secondary-gray tracking-wide">Entregado</span>
                        </div>
                        <div className="w-full mt-5">
                            <p className="text-2xl font-semibold text-baby-black">${props.total}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default OrderCard