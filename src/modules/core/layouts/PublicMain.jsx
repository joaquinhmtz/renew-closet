import { Outlet } from "react-router-dom"

import PublicHeader from "../components/PublicHeader"
import PublicFooter from "../components/PublicFooter"

const PublicMain = () => {
    return (
        <> 
            <main className="h-screen">
                <PublicHeader />

                <Outlet />

                <PublicFooter />
            </main>
        </>
    )
}

export default PublicMain