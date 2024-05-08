import { Routes, Route } from "react-router-dom";

/** Public Main Layout and Components **/
import PublicMain from "../layouts/PublicMain";
import HomeLayout from "../layouts/public/HomeLayout";
import BagLayout from "../layouts/public/BagLayout";

/** Private Main Layout and Components **/
import PrivateMain from "../layouts/PrivateMain";

const RoutesMain = () => {
    
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicMain />}>
                <Route index element={<HomeLayout />}/>
                <Route path="bolsa" element={<BagLayout />} />
            </Route>
            {/* Private Routes */}
            <Route path="/app">
                <Route index element={<PrivateMain />} />
            </Route>
        </Routes>
    )

}

export default RoutesMain