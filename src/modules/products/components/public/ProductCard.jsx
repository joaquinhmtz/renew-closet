import StatusTag from "../../../shared/components/StatusTag";
import imgProduct from "./../../../../assets/t-shirt.png";

const ProductCard = ({ props }) => {

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
            <div className="w-full flex flex-col mt-12">
                <div className="w-full min-h-80 bg-gray-400">
                    <img className="w-full h-full object-cover" src={imgProduct} alt="profile-picture" />
                </div>
                <div className="mt-5 flex justify-between content-center">
                    <h2 className="font-medium text-base">{props.name}</h2>
                    <StatusTag status={props.status} colors={colors}/>
                </div>
                <h3>Talla: {props.size}</h3>
                <h4>${props.price}</h4>
            </div>
        </>
    )
}

export default ProductCard