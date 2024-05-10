import { Outlet } from "react-router-dom"

const PrivateMain = () => {
    return (
        <>
            <main className="h-screen">
                {/* <PublicHeader /> */}

                <Outlet />

                {/* <PublicFooter /> */}
            </main>
        </>
    )
}

export default PrivateMain