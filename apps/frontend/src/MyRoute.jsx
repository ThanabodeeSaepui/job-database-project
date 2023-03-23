import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import CreateCompany from "./components/CreateCompany";
import CreateJob from "./components/CreateJob";
import Search from "./components/Search";
import Description from "./components/Description";
import Company from "./components/Company";
import EditJob from "./components/EditJob";
import EditCompany from "./components/EditCompany";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateCompany" element={<CreateCompany />} />
        <Route path="/CreateJob" element={<CreateJob />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Description/:id" element={<Description />} />
        <Route path="/Company/:id" element={<Company />} />
        <Route path="/EditJob/:id" element={<EditJob />} />
        <Route path="/EditCompany/:id" element={<EditCompany />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
