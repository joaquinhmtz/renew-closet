import React, { useEffect, useState } from "react";
import Icon from "../../shared/components/Icon"

const icons = ["faCircleUser", "faHeart", "faBagShopping"];

const PublicHeader = () => {
    
    const [top, setTop] = useState(true);

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
                <div>
                    <Icon key={"faBars"} name={"faBars"} styleClass={"lg:hidden"}/>
                    <span className="text-2xl font-semibold invisible lg:visible">Renew-Closet</span>
                </div>
                <div className="flex space-x-8">
                    {icons.map(icon => 
                        <Icon key={icon} name={icon} styleClass={""}/>
                    )}
                </div>
            </nav>
        </>
    )
}

export default PublicHeader