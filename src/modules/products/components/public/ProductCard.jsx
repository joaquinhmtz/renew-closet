import imgProduct from "./../../../../assets/t-shirt.png";

const ProductCard = () => {
    return (
        <>
            <div className="w-full flex flex-col mt-12">
                <div className="w-full min-h-80 bg-gray-400">
                    <img className="w-full h-full object-cover" src={imgProduct} alt="profile-picture" />
                </div>
                <div>
                    <h2>nombre dle producto</h2>
                    <span>statyus</span>
                </div>
                <h3>talla</h3>
                <h4>precio</h4>
            </div>
        </>
    )
}

export default ProductCard