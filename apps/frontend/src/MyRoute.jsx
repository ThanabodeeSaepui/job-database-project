import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import CreateCompany from "./components/CreateCompany";
import CreateJob from "./components/CreateJob";
import Serch from "./components/Serch";
import Description from "./components/Description";
import Company from "./components/Company";

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/CreateCompany" element={<CreateCompany/>} />
                <Route path="/CreateJob" element={<CreateJob/>} />
                <Route path="/Serch" element={<Serch/>} />
                <Route path="/Description" element={<Description/>} />
                <Route path="/Company" element={<Company/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;