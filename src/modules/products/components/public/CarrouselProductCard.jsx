import imgProduct from "./../../../../assets/t-shirt.png";
import { Link } from "react-router-dom";
import StatusTag from "../../../shared/components/StatusTag";

const CarrouselProductCard = ({ props }) => {

    let colors = {};

    if (props.status === "available") {
        colors = { "text": "text-green", "bg" : "bg-baby-green", "circle" : "text-grand-green" };
    } else if (props.status === "almost_yours") {
        colors = { "text": "text-blue", "bg" : "bg-baby-blue", "circle" : "text-grand-blue" };
    } if (props.status === "separate") {
        colors = { "text": "text-amber", "bg" : "bg-baby-amber", "circle" : "text-grand-amber" };
    }

    return (
        <>
            <Link to={`/product/${props._id}`}>
                <figure>
                    <div className="w-full flex min-h-72 bg-gray-400">
                        <img className="w-full object-cover" src={imgProduct} alt="profile-picture" />
                    </div>
                    <div className="mt-3">
                        <div className={`flex justify-between content-center ${props.status === "separate" ? 'mt-2' : 'mt-5'}`}>
                            <h2 className="font-medium text-base text-primary-black">{props.name}</h2>
                            <StatusTag status={props.status} colors={colors}/>
                        </div>
                        <h3 className="text-secondary-gray text-base font-light pt-0.5">Talla: {props.size}</h3>
                        <h4 className="text-primary-black font-medium text-base pt-0.5">${props.price}</h4>
                    </div>
                </figure>
            </Link>
        </>
    )
}

export default CarrouselProductCard