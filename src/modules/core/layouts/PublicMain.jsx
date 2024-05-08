import { Outlet } from "react-router-dom"

import PublicHeader from "../components/PublicHeader"
import PublicFooter from "../components/PublicFooter"

const PublicMain = () => {
    return (
        <> 
            <main className="h-screen">
                <PublicHeader />
                <div className="mt-20">Soy el public main</div>

                <Outlet />

                <PublicFooter />
            </main>
        </>
    )
}

export default PublicMain