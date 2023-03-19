import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style/Homepage.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react'
// import { useQuery } from "react-query";
import axios from 'axios'

const Homepage = () => {
    const [companies, setCompanies] = useState({})

    axios.get("http://localhost:8080/api/sql/companies").then((res) => {
        res.data.forEach((obj) => {
            obj.label = obj.company_name
            delete obj.company_name
        })
        setCompanies(res.data);
        }
    )
    
    return (
        <div>
            <Navbar/>
            <div>
                <div className="box">
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">ประเภทงาน</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>กรุณาเลือกประเภทงานที่สนใจ</option>
                            <option value="217" >Accounting</option>
                            <option value="237" >Electrical Engineering</option>
                            <option value="257" >Civil Engineering</option>
                            <option value="263" >Civil Computer Engineering</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">ชื่อตำแหน่ง</label>
                        <input className="form-control" type="text" placeholder="กรุณาเลือกตำแหน่งที่สนใจ"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">ชื่อบริษัท</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={companies}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="กรุณาเลือกบริษัทที่สนใจ" />}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">ค้นหา</button>
                </div>

                <div className="box1">
                    <h1>Box1</h1>
                </div>
                <div className="box2">
                    <h1>Box2</h1>
                </div>
                <div className="box3">
                    <h1>Box3</h1>
                </div>
                <div className="box4">
                    <h1>Box4</h1>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;