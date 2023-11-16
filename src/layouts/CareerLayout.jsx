import { Outlet } from "react-router-dom";

const CareerLayout = () => {
    return ( 
        <div className="careers-layout">
            <h1>Hello Career</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut?</p>


            <Outlet/>
        </div>
     );
}
 
export default CareerLayout;