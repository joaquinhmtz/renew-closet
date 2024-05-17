const products = [{
    "_id": "1",
    "name": "T-shirt",
    "price": "20.00",
    "brand": "Zara",
    "size": "M",
    "status": "available",
    "cover_photo": "https://example.com/tshirt.jpg"
  },
  {
    "_id": "2",
    "name": "Jeans",
    "price": "50.00",
    "brand": "Zara",
    "size": "L",
    "status": "almost_yours",
    "cover_photo": "https://example.com/jeans.jpg"
  },
  {
    "_id": "3",
    "name": "Dress",
    "price": "80.00",
    "brand": "Zara",
    "size": "S",
    "status": "separate",
    "cover_photo": "https://example.com/dress.jpg"
  },
  {
    "_id": "4",
    "name": "Sweater",
    "price": "45.00",
    "brand": "Zara",
    "size": "XL",
    "status": "available",
    "cover_photo": "https://example.com/sweater.jpg"
}];
import BagProductCard from "../../../products/components/public/BagProductCard";
import Icon from "../../../shared/components/Icon";
import imgProduct from "./../../../../assets/t-shirt.png"

const FavoriteLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-20 px-10 mb-10">
                <h2 className="font-bold text-2xl text-primary-black">Favoritos</h2>

                <div className="flex h-screen">
                    <ul className="mt-5">
                        {products.map(item =>
                            <li key={item._id} className="w-full mb-5">
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div className="basis-40">
                                            <div className="w-full bg-slate-300">
                                                <img src={imgProduct} alt="" />
                                            </div>
                                        </div>
                                        <div className="basis-1/3">
                                            <div className="flex justify-between">
                                                <h2 className="font-medium text-base text-primary-black">{item.name}</h2>
                                                <Icon name={"faHeart"} styleClass={""} size={"lg"} />
                                            </div>
                                            <p className="text-secondary-gray text-base font-light pt-0.5">{item.brand}</p>
                                            <p className="text-secondary-gray text-base font-light pt-0.5">Talla: {item.size}</p>
                                            <p className="text-primary-black font-medium text-base pt-0.5">${item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    )
}

export default FavoriteLayout