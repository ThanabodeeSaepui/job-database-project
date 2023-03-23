import Navbar from "./Navbar";
import "./style/bg.css";

import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Alert } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const EditCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const { isLoading, data } = useQuery({
    queryFn: () => {
      return axios
        .get(`http://localhost:8080/api/sql/companies/${id}`)
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      setCompany(data?.company_name);
      setAddress(data?.address);
      setContact(data?.contact);
      setDescription(data?.description);
    }
  }, [data]);

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
    try {
      let res = await axios.put(
        `http://localhost:8080/api/sql/companies/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        setSuccess(true);
      } else {
        setFail(true);
      }
    } catch (err) {
      setFail(true);
    }
  };

  return (
    <div className="bg">
      <Navbar />
      <Container
        sx={{
          pt: 10,
          pb: 6,
          mb: 10,
          width: { xs: 400, sm: 600, md: 800, lg: 1000 },
        }}
      >
        <Card
          sx={{
            mt: 2,
            border: 1,
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <div className="m-3">
              <form>
                {success && (
                  <Alert severity="success">Success สร้างบริษัทสำเร็จ</Alert>
                )}
                {fail && (
                  <Alert severity="error">Error ไม่สามารถสร้างบริษัทได้</Alert>
                )}
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    ชื่อบริษัท{" "}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="กรุณากรอกชื่อบริษัท"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    ที่อยู่
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="กรุณากรอกที่อยู่บริษัท"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    ช่องทางการติดต่อ
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="กรุณากรอกช่องทางการติดต่อ"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    รายละเอียด
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={handleClick}
                  >
                    แก้ไขบริษัท
                  </button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EditCompany;
