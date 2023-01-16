import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import BadGateWay from "../pages/BadGateWay";
function E_Shop() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>

                <Route path='*' element={<BadGateWay/>}/>
            </Routes>
        </div>

    );
}

export default E_Shop;