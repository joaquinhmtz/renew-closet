import StatusTag from "../../../shared/components/StatusTag";
import imgProduct from "./../../../../assets/t-shirt.png";

const ProductCard = ({ props }) => {
    console.log("props**", props);

    return (
        <>
            <div className="w-full flex flex-col mt-12">
                <div className="w-full min-h-80 bg-gray-400">
                    <img className="w-full h-full object-cover" src={imgProduct} alt="profile-picture" />
                </div>
                <div className="mt-5 flex justify-between content-center">
                    <h2 className="font-medium text-base">{props.name}</h2>
                    <StatusTag status={props.status}/>
                </div>
                <h3>Talla: {props.size}</h3>
                <h4>${props.price}</h4>
            </div>
        </>
    )
}

export default ProductCard