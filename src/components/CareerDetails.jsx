import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();

    return ( 
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salay {career.salary}</p>
            <p>Location: {career.location}</p>
        </div>
     );
}
 
export default CareerDetails;



//loader function

export const CareerDetailsLoader = async ({params}) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);

    if(!res.ok){
        throw Error ('Could not find the data');
    }

    return res.json();
}