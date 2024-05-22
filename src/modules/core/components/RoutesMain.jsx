import { Routes, Route, Navigate } from "react-router-dom";

/** Public Main Layout and Components **/
import PublicMain from "../layouts/PublicMain";
import HomeLayout from "../layouts/public/HomeLayout";
import DetailProduct from "../layouts/public/DetailProduct";
import AccountLayout from "../layouts/public/AccountLayout";
import BagLayout from "../layouts/public/BagLayout";
import OrderLayout from "../layouts/public/OrderLayout";
import RefundLayout from "../layouts/public/RefundLayout";
import FavoriteLayout from "../layouts/public/FavoriteLayout";

/** Private Main Layout and Components **/
import PrivateMain from "../layouts/PrivateMain";
import LoginLayout from "../layouts/private/LoginLayout";
import AppLayout from "../layouts/private/AppLayout";
import OrderListLayout from "../layouts/private/OrderListLayout";
import RefundListLayout from "../layouts/private/RefundListLayout";
import OrderDetail from "../../orders/components/OrderDetail";

const RoutesMain = () => {
    
    return (
        <Routes>
            {/* Public Routes */}
            <Route exact path="/" element={<PublicMain />}>
                <Route index element={<HomeLayout />}/>
                <Route path="/product/:id" element={<DetailProduct />}/>
                <Route path="/cuenta" element={<AccountLayout />}>
                    <Route path="pedidos" element={<OrderLayout />} />
                    <Route path="devoluciones" element={<RefundLayout />} />
                </Route>
                <Route path="bolsa" element={<BagLayout />} />
                <Route path="favoritos" element={<FavoriteLayout />} />
                <Route element={
                    <Navigate to='/' />
                } />
            </Route>
            {/* Private Routes */}
            <Route exact path="/login" element={<PrivateMain />}>
                <Route index element={<LoginLayout />} />
            </Route>
            <Route exact path="/app" element={<PrivateMain />}>
                <Route path="orders" element={<OrderListLayout />} /> 
                <Route path="order/:id" element={<OrderDetail />}/>
                <Route path="refunds" element={<RefundListLayout />} /> 
            </Route>
        </Routes>
    )

}

export default RoutesMain