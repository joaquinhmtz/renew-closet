import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser ,faHeart, faBagShopping, faBars, faXmark, faHouse } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name, styleClass }) => {

    if (name === "faCircleUser" ? name = faCircleUser : null);
    if (name === "faHeart" ? name = faHeart : null);
    if (name === "faBagShopping" ? name = faBagShopping : null);
    if (name === "faBars" ? name = faBars : null);
    if (name === "faXmark" ? name = faXmark : null);
    if (name === "faHouse" ? name = faHouse : null);

    return (
        <FontAwesomeIcon className={`text-primary-black ${styleClass} hover:text-neutral-400 cursor-pointer active:text-neutral-600`} icon={name} size="xl" />
    )
}

export default Icon