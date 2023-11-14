//import react necessary file
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from 'react-router-dom';

//import layout file
import RootLayout from '../layouts/RootLayout';
import HelpLayout from '../layouts/HelpLayout';
//import style file
import '../styles/index.css'

//import components file
import Home from './Home';
import About from './About';
import Faq from './Faq';
import Contact from './Contact';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='help' element={<HelpLayout/>}>
                <Route path='faq' element={<Faq/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Route>
    )
)

const App = () => {
    return ( 
        <RouterProvider router={router}/>
    );
}
 
export default App;