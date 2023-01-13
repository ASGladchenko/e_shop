import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";

function E_Shop() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>

            {/*<Route path='*' element={<BadGatWay/>}/>*/}
        </Routes>
    );
}
export default E_Shop;