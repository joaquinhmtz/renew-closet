import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import ContainerOption from "../../../account/components/ContainerOption";
import Icon from "../../../shared/components/Icon";

const AccountLayout = () => {

    const [template, setTemplate] = useState({ title: "Mi cuenta", changeTemplate: false });

    const options = [{
        name: "Mis pedidos",
        icon: "faMagnifyingGlass",
        url: "/cuenta/pedidos"
    }, {
        name: "Mis devoluciones",
        icon: "faArrowRotateLeft",
        url: "/cuenta/devoluciones"
    }];

    const ChangeTemplate = (data) => {
        setTemplate({ title: data.name, changeTemplate: true });
    }

    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h1 className="font-bold text-2xl text-primary-black">{template.title}</h1>

                {template.changeTemplate ?
                    <div className="w-full flex items-center justify-end">
                        <Link className="flex items-center" to="/cuenta" onClick={() => setTemplate({ title: "Mi cuenta", changeTemplate: false })}>
                            <Icon name={"faChevronLeft"} styleClass={"mr-2"} size={"lg"} /> <h3 className="font-normal">Regresar</h3>
                        </Link>
                    </div>
                : null}

                {template.changeTemplate ? 
                <Outlet /> :
                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center lg:justify-center mt-10">
                    {options.map(opt => 
                        <ContainerOption sendData={ChangeTemplate} key={opt.url} props={opt} />
                    )}
                </section>
                }
                
            </div>
        </>
    )
}

export default AccountLayout