import { Routes, Route, Navigate } from "react-router-dom";

/** Public Main Layout and Components **/
import PublicMain from "../layouts/PublicMain";
import HomeLayout from "../layouts/public/HomeLayout";
import AccountLayout from "../layouts/public/AccountLayout";
import BagLayout from "../layouts/public/BagLayout";

/** Private Main Layout and Components **/
import PrivateMain from "../layouts/PrivateMain";
import LoginLayout from "../layouts/private/LoginLayout";

const RoutesMain = () => {
    
    return (
        <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<PublicMain />}>
                <Route index element={<HomeLayout />}/>
                <Route path="mi-cuenta" element={<AccountLayout />} />
                <Route path="bolsa" element={<BagLayout />} />
                <Route element={
                    <Navigate to='/' />
                } />
            </Route>
            {/* Private Routes */}
            <Route exact path="/app" element={<PrivateMain />}>
                <Route index element={<LoginLayout />} />
                <Route path="*" element={<PrivateMain />} />
            </Route>
        </Routes>
    )

}

export default RoutesMain