import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faCircleUser ,faHeart, faBagShopping, faBars, faXmark, faCircle, faMagnifyingGlass, faArrowRotateLeft, faChevronLeft,faHouse
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name, styleClass, size }) => {

    if (name === "faCircleUser" ? name = faCircleUser : null);
    if (name === "faHeart" ? name = faHeart : null);
    if (name === "faBagShopping" ? name = faBagShopping : null);
    if (name === "faBars" ? name = faBars : null);
    if (name === "faXmark" ? name = faXmark : null);
    if (name === "faHouse" ? name = faHouse : null);
    if (name === "faCircle" ? name = faCircle : null);
    if (name === "faMagnifyingGlass" ? name = faMagnifyingGlass : null);
    if (name === "faArrowRotateLeft" ? name = faArrowRotateLeft : null);
    if (name === "faChevronLeft" ? name = faChevronLeft : null);

    return (
        <FontAwesomeIcon className={`${styleClass} hover:text-neutral-400 cursor-pointer active:scale-110`} icon={name} size={size} />
    )
}

export default Icon