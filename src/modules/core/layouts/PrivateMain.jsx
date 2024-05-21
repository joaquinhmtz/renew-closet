import { Outlet } from "react-router-dom"
import PrivateHeader from "../components/PrivateHeader"

const PrivateMain = () => {

    return (
        <>
            <main className="h-screen bg-main">
                <PrivateHeader />

                <Outlet />

                {/* <PublicFooter /> */}
            </main>
        </>
    )
}

export default PrivateMain