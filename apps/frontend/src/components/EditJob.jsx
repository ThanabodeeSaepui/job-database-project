import Navbar from "./Navbar";
import "./style/bg.css";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Alert } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const EditJob = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [company, setCompany] = useState(null);
  const [job_name, setJob_name] = useState("");
  const [job_description, setJob_description] = useState("");
  const [avail_seat, setAvail_seat] = useState("");

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const { isLoading, data } = useQuery({
    queryFn: () => {
      return axios
        .get(`http://localhost:8080/api/sql/jobs/${id}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setCategory(data?.category?.category_name);
      setCompany(data?.company?.company_name);
      setJob_name(data?.job_name);
      setJob_description(data?.job_description);
      setAvail_seat(data?.avail_seat);
    }
  }, [data]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (job_name === "") return;
    if (job_description === "") return;
    if (avail_seat === "") return;
    const data = JSON.stringify({
      job_name: job_name,
      job_description: job_description,
      avail_seat: avail_seat,
    });
    try {
      let res = await axios.put(
        `http://localhost:8080/api/sql/jobs/${id}`,
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
        sx={{ pt: 10, mb: 10, width: { xs: 400, sm: 600, md: 800, lg: 1000 } }}
      >
        <Card
          sx={{
            // minWidth: 275,
            // maxWidth: 800,
            // width: 600,
            mt: 2,
            border: 1,
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <div className="m-3">
              {success && (
                <Alert severity="success">Success โพสต์งานสำเร็จ</Alert>
              )}
              {fail && (
                <Alert severity="error">Error ไม่สามารถโพสต์งานได้</Alert>
              )}
              <Typography
                variant="h4"
                align="center"
                underline="hover"
                style={{ marginBottom: 10 }}
              >
                {company}
              </Typography>
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                หมวดหมู่ : {category}
              </Typography>
              <from className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  ชื่องาน/ตำแหน่ง
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="กรุณากรอกตำแหน่งการทำงาน"
                  value={job_name}
                  style={{ marginBottom: 10 }}
                  onChange={(e) => setJob_name(e.target.value)}
                />
                <label for="exampleFormControlTextarea1" className="form-label">
                  จำนวนที่รับ
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="จำนวน"
                  style={{ marginBottom: 10 }}
                  value={avail_seat}
                  onChange={(e) => setAvail_seat(e.target.value)}
                />
                <label for="exampleFormControlTextarea1" className="form-label">
                  รายละเอียด
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  style={{ resize: "none", height: 200, marginBottom: 30 }}
                  value={job_description}
                  onChange={(e) => setJob_description(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  บันทึกการแก้ไข
                </button>
              </from>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EditJob;
