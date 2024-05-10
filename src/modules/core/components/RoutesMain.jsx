import { Routes, Route } from "react-router-dom";

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
            <Route path="/" element={<PublicMain />}>
                <Route index element={<HomeLayout />}/>
                <Route path="mi-cuenta" element={<AccountLayout />} />
                <Route path="bolsa" element={<BagLayout />} />
                <Route path="*" element={<PublicMain />} />
            </Route>
            {/* Private Routes */}
            <Route path="/app" element={<PrivateMain />}>
                <Route index element={<LoginLayout />} />
                <Route path="*" element={<PrivateMain />} />
            </Route>
        </Routes>
    )

}

export default RoutesMain