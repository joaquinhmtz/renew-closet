import { Link } from "react-router-dom";
import Icon from "../../../shared/components/Icon"

const AccountLayout = () => {
    return (
        <>
            <div className="mt-20 pt-8 pb-4 px-10">
                <h1 className="font-bold text-2xl text-primary-black">Mi cuenta</h1>

                <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center lg:justify-center mt-10">
                    <Link to="/" className="w-full border-primary-all hover:shadow-md rounded-sm">
                        <div className="w-full flex p-10">
                            <Icon key={"faMagnifyingGlass"} name={"faMagnifyingGlass"} styleClass={"mr-5"} size={"xl"}/>
                            <h3>Mis pedidos</h3>
                        </div>
                    </Link>
                </section>
            </div>
        </>
    )
}

export default AccountLayout