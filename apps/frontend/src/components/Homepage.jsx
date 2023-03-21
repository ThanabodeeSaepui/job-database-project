import Navbar from "./Navbar";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);

  const [job, setJob] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: () => {
      return axios
        .get("http://localhost:8080/api/sql/companies")
        .then((res) => {
          res.data.forEach((obj) => {
            obj.label = obj.company_name; // rename company_name to label
            delete obj.company_name;
          });
          return res.data;
        });
    },
  });

  useEffect(() => {
    if (isLoading === false) {
      setOptions(data);
    }
  }, [isLoading]);

  const handleSearch = (e) => {
    // console.log(fee);
    e.preventDefault();
    navigate('/serch',{state:{job:job,category:category,company:company}})
  };

  return (
    <div>
      <Navbar />
      <div className="container p-3">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            ประเภทงาน
          </label>
          <select className="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
            <option selected>กรุณาเลือกประเภทงานที่สนใจ</option>
            <option value="Accounting">Accounting</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            ชื่อตำแหน่ง
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="กรุณาเลือกตำแหน่งที่สนใจ"
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            ชื่อบริษัท
          </label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            onChange={(e, value) => setCompany(value.label)}
            renderInput={(params) => (
              <TextField {...params} label="กรุณาเลือกบริษัทที่สนใจ" />
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary"  onClick={handleSearch}>
          ค้นหา
        </button>
      </div>
    </div>
  );
};

export default Homepage;
