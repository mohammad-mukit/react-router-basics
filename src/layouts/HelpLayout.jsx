import { NavLink,Outlet } from "react-router-dom";

const HelpLayout = () => {
    return ( 
        <div className="help-layout">
            <h1>Hello help</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, omnis.</h3>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>

            <Outlet/>

        </div>
     );
}
 
export default HelpLayout;