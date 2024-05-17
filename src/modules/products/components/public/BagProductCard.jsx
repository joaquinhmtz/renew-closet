import imgProduct from "./../../../../assets/t-shirt.png"
import Icon from "../../../shared/components/Icon"

const BagProductCard = ({ props }) => {
    return (
        <>
            <div className="w-full flex justify-between">
                <div className="w-full flex gap-3">
                    <div className="basis-40">
                        <div className="w-full bg-slate-300">
                            <img src={imgProduct} alt="" />
                        </div>
                    </div>
                    <div className="basis-2/3">
                        <h2 className="font-medium text-base text-primary-black">{props.name}</h2>
                        <p className="text-secondary-gray text-base font-light pt-0.5">{props.brand}</p>
                        <p className="text-secondary-gray text-base font-light pt-0.5">Talla: {props.size}</p>
                        <p className="text-primary-black font-medium text-base pt-0.5">${props.price}</p>
                    </div>
                </div>
                <Icon name={"faTrash"} styleClass={"lg:pr-5"} size={"lg"} />
            </div>
        </>
    )
}

export default BagProductCard