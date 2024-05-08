import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser ,faHeart, faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name, styleClass }) => {

    if (name === "faCircleUser" ? name = faCircleUser : null);
    if (name === "faHeart" ? name = faHeart : null);
    if (name === "faBagShopping" ? name = faBagShopping : null);
    if (name === "faBars" ? name = faBars : null);

    return (
        <FontAwesomeIcon className={`text-primary-black ${styleClass}`} icon={name} size="xl" />
    )
}

export default Icon