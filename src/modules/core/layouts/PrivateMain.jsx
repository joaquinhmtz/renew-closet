import { Outlet } from "react-router-dom"

const PrivateMain = () => {
    return (
        <>
            <div>Soy el private main</div>

            <Outlet />
        </>
    )
}

export default PrivateMain