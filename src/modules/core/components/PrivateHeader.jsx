import { useState } from "react"
import { Link } from "react-router-dom"
import DropdownAccount from "./DropdownAccount";
import Icon from "../../shared/components/Icon";

const menu = [{
    href: "/app/orders",
    name: "Órdenes",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" /></svg>  
}, {
    href: "/app/refunds",
    name: "Devoluciones",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm-.97 6.53a.75.75 0 1 0-1.06-1.06L7.72 9.22a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h3.065a1.875 1.875 0 0 1 0 3.75H12a.75.75 0 0 0 0 1.5h1.125a3.375 3.375 0 1 0 0-6.75h-3.064l.97-.97Z" clipRule="evenodd" /></svg>  
}, {
    href: "/app/products",
    name: "Productos",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z" clipRule="evenodd" />
    <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" /></svg>  
}];

const PrivateHeader = () => {

    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className={`w-full fixed top-0 transition-all bg-white shadow h-18 px-6 lg:px-10 grid grid-cols-3 items-center justify-between`}>
                <div className="flex place-items-center py-5">
                    <button onClick={() => setNav(!nav)} className="z-35">
                        <Icon key={"faBars"} name={"faBars"} styleClass={"lg:hidden"} size={"xl"}/>
                    </button>
                    <Link to="/" className="invisible lg:visible">
                        <span className="text-2xl font-semibold">Panel</span>
                    </Link>
                </div>
                <div className="flex justify-center invisible lg:visible py-5">
                    <ul className="w-full flex justify-between">
                        {menu.map(item => 
                            <li key={item.name}>
                                <Link to={item.href} className="link font-medium">
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="flex justify-end items-center py-5 basis-1/3">
                    <DropdownAccount />
                </div>
            </nav>

            {nav ? (
                <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={() => setNav(!nav)}></div>
            ) : (
                ""
            )}

            <div 
                className={ 
                    nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-30 duration-300"
                    : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-30 duration-300"
                }
            >
                <div className="w-full h-20 py-5 px-6 flex flex-col justify-start">
                    <button onClick={() => setNav(!nav)} className="z-35 self-start py-3">
                        <Icon key={"faXmark"} name={"faXmark"} styleClass={"lg:hidden"} size={"xl"}/>
                    </button>
                    <nav>
                        <ul className="flex flex-col pt-4 text-gray-800">
                            {menu.map(item => 
                                <li key={item.name} className="w-full px-4 py-4 flex place-items-center hover:bg-gray-100 focus:ring-blue-300 hover:rounded-md hover:font-medium cursor-pointer">
                                    <Link className="w-full" to={item.href} onClick={() => setNav(!nav)}>
                                        <div className="w-full flex">
                                            {item.icon}
                                            <span className="ml-3">{item.name}</span>
                                        </div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default PrivateHeader