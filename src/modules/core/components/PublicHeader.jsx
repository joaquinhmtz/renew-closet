import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../shared/components/Icon"

const icons = [{
    icon:"faCircleUser",
    path:"/"
}, {
    icon:"faHeart",
    path: "/",
}, {
    icon:"faBagShopping",
    path: "/bolsa"
}];

const PublicHeader = () => {
    
    const [top, setTop] = useState(true);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
          window.scrollY > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <>
            <nav className={`w-full fixed top-0 z-20 transition-all ${!top && `bg-white shadow-lg`} h-20 py-5 px-10 flex place-items-center justify-between text-primary-black`}>
                <div className="flex place-items-center">
                    <button onClick={() => setNav(!nav)} className="z-35">
                        <Icon key={"faBars"} name={"faBars"} styleClass={"lg:hidden"} size={"xl"}/>
                    </button>
                    <span className="text-2xl font-semibold invisible lg:visible">Renew-Closet</span>
                </div>
                <div className="flex space-x-8">
                    {icons.map(iconObj => 
                        <Link to={iconObj.path} key={iconObj.icon}>
                            <Icon name={iconObj.icon} styleClass={""} size={"xl"}/>
                        </Link>
                    )}
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
                            <li className="w-full px-4 py-4 flex place-items-center hover:bg-gray-100 focus:ring-blue-300 hover:rounded-md hover:font-medium cursor-pointer">
                                <Link to="/">
                                    <Icon name={"faHouse"} styleClass={"pr-2"} size={"xl"}/> Home
                                </Link>
                            </li>
                            <li className="w-full px-4 py-4 flex place-items-center hover:bg-gray-100 hover:rounded-md hover:font-medium cursor-pointer">
                                <Link to="/">
                                    <Icon name={"faHouse"} styleClass={"pr-2"} size={"xl"}/> About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default PublicHeader