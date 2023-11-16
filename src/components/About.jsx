import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
    const [user,setUser] = useState('mukit');

    if(!user){
        return <Navigate to='/' replace={true}/>
    }

    return ( 
        <div className="main-about">
            <h1>Hello about</h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt consequatur nisi voluptatum eveniet, eius dicta voluptatibus accusamus exercitationem ad obcaecati dignissimos esse, laudantium quos eum facilis aut vero magnam velit. Laborum, eaque cum.</h3>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
     );
}
 
export default About;