import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faCircleUser ,faHeart, faBagShopping, faBars, faXmark, faCircle, 
    faMagnifyingGlass, faArrowRotateLeft, faChevronLeft, faStore, faQrcode, faTrash,
    faCircleXmark, faTriangleExclamation, faTruck, faCircleCheck, faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name, styleClass, size }) => {

    if (name === "faCircleUser" ? name = faCircleUser : null);
    if (name === "faHeart" ? name = faHeart : null);
    if (name === "faBagShopping" ? name = faBagShopping : null);
    if (name === "faBars" ? name = faBars : null);
    if (name === "faXmark" ? name = faXmark : null);
    if (name === "faStore" ? name = faStore : null);
    if (name === "faCircle" ? name = faCircle : null);
    if (name === "faMagnifyingGlass" ? name = faMagnifyingGlass : null);
    if (name === "faArrowRotateLeft" ? name = faArrowRotateLeft : null);
    if (name === "faChevronLeft" ? name = faChevronLeft : null);
    if (name === "faQrcode" ? name = faQrcode : null);
    if (name === "faTrash" ? name = faTrash : null);
    if (name === "faCircleXmark" ? name = faCircleXmark : null);
    if (name === "faTriangleExclamation" ? name = faTriangleExclamation : null);
    if (name === "faTruck" ? name = faTruck : null);
    if (name === "faCircleCheck" ? name = faCircleCheck : null);
    if (name === "faArrowLeftLong" ? name = faArrowLeftLong : null);

    return (
        <FontAwesomeIcon className={`${styleClass} hover:text-neutral-400 cursor-pointer active:scale-110`} icon={name} size={size} />
    )
}

export default Icon