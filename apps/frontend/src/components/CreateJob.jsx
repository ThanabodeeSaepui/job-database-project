import Navbar from "./Navbar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react'
import axios from 'axios'
import { Alert } from '@mui/material'

const CreateJob=()=>{
    const [companies, setCompanies] = useState({})

    axios.get("http://localhost:8080/api/sql/companies").then((res) => {
        res.data.forEach((obj) => {
            obj.label = obj.company_name
            delete obj.company_name
        })
        setCompanies(res.data);
        }
    )

    const [category, setCategory] = useState(null)
    const [company, setCompany] = useState(null)
    const [job_name, setJob_name] = useState('');
    const [job_description, setJob_description] = useState('');
    const [avail_seat, setAvail_seat] = useState('');

    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    const handleClick = async (e) =>{
        e.preventDefault();
        if(job_name === "") return;
        if(job_description === "") return;
        if(avail_seat === "") return;
        const data = JSON.stringify({
            job_name: job_name,
            job_description: job_description,
            avail_seat: avail_seat,
            category_id: category,
            company_id: company
        })
        console.log(data);
        try {
            let res = await axios.post("http://localhost:8080/api/sql/jobs", data, {
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            if (res.status === 200) {
                setJob_name("");
                setJob_description("");
                setAvail_seat("");
                setSuccess(true);
            } else {
                setFail(true)
            }
        } catch (err) {
            setFail(true)
        }
        
    }

    return (
        <div>
            <Navbar/>
            <div className="container p-3 mb-3">  
                {success && <Alert severity="success">Success โพสต์งานสำเร็จ</Alert>}
                {fail && <Alert severity="error">Error ไม่สามารถโพสต์งานได้</Alert>}
                <from>
                    <label for="exampleFormControlTextarea1" className="form-label">ประเภทงาน</label>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                        <option selected>กรุณาเลือกประเภทงานงาน</option>
                        <option value="217" >Accounting</option>
                        <option value="237" >Civil Engineering</option>
                        <option value="257" >Electrical Engineering</option>
                        <option value="263" >Civil Computer Engineering</option>
                    </select>
                    <label for="exampleFormControlTextarea1" className="form-label">ชื่อบริษัท</label>
                    <Autocomplete
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        disablePortal
                        id="combo-box-demo"
                        options={companies}
                        sx={{ width: 300 }}
                        onChange={(e, value) => setCompany(value.id)}
                        renderInput={(params) => <TextField {...params} label="กรุณาเลือกบริษัทที่สนใจ" />}
                    />   
                    <label for="exampleFormControlTextarea1" className="form-label">ตำแหน่ง</label>
                    <input className="form-control" type="text" placeholder="กรุณากรอกตำแหน่งการทำงาน" value={job_name} onChange={(e) => setJob_name(e.target.value)}/>
                    <label for="exampleFormControlTextarea1" className="form-label">จำนวนที่รับ</label>
                    <input className="form-control" type="text" placeholder="จำนวน" value={avail_seat} onChange={(e) => setAvail_seat(e.target.value)}/>
                    <label for="exampleFormControlTextarea1" className="form-label">รายละเอียด</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={job_description} onChange={(e) => setJob_description(e.target.value)}></textarea>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>โพสต์งาน</button>
                </from>
            </div>
        </div>
    )
}

export default CreateJob;