import { Outlet } from "react-router-dom"

import PublicHeader from "../components/PublicHeader"
import PublicFooter from "../components/PublicFooter"

const PublicMain = () => {
    return (
        <>
            <PublicHeader />
            <div>Soy el public main</div>

            <Outlet />

            <PublicFooter />
        </>
    )
}

export default PublicMain