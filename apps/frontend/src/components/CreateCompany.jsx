import Navbar from "./Navbar";
import { useState } from "react";
// import { useQuery } from 'react-query'
import axios from "axios";
import { Alert } from "@mui/material";

const CreateCompany = () => {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (company === "") return;
    if (address === "") return;
    if (contact === "") return;
    if (description === "") return;
    const data = JSON.stringify({
      company_name: company,
      address: address,
      contact: contact,
      description: description,
    });
    console.log(data);
    try {
      let res = await axios.post(
        "http://localhost:8080/api/sql/companies",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        setCompany("");
        setAddress("");
        setContact("");
        setDescription("");
        setSuccess(true);
      } else {
        setFail(true);
      }
    } catch (err) {
      setFail(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container p-3">
        <form>
          <div className="mb-3">
            {success && (
              <Alert severity="success">Success สร้างบริษัทสำเร็จ</Alert>
            )}
            {fail && (
              <Alert severity="error">Error ไม่สามารถสร้างบริษัทได้</Alert>
            )}
            <label for="exampleFormControlTextarea1" className="form-label">
              ชื่อบริษัท{" "}
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="กรุณากรอกชื่อบริษัท"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <label for="exampleFormControlTextarea1" className="form-label">
              ที่อยู่
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="กรุณากรอกที่อยู่บริษัท"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label for="exampleFormControlTextarea1" className="form-label">
              ช่องทางการติดต่อ
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="กรุณากรอกช่องทางการติดต่อ"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <label for="exampleFormControlTextarea1" className="form-label">
              รายละเอียด
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            เพิ่มบริษัท
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;