import Navbar from "./Navbar";
import "./style/bg.css";

import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [job, setJob] = useState({});
  const { isLoading, data } = useQuery({
    queryFn: () => {
      return axios
        .get(`http://localhost:8080/api/sql/jobs/${id}`)
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setJob(data);
    }
  }, [data]);

  return (
    <div className="bg">
      <Navbar />
      <Container
        disableGutters
        component="main"
        sx={{ pt: 15, pb: 6, width: { xs: "70%", lg: 1000 } }}
      >
        <Card
          sx={{
            mt: 2,
            border: 1,
            borderRadius: "16px",
          }}
        >
          <CardContent sx={{ m: 3 }}>
            <Typography
              variant="h4"
              align="center"
              style={{ marginBottom: 30 }}
            >
              <Link
                underline="hover"
                color="text.primary"
                onClick={() => navigate(`/Company/${job?.company?.id}`)}
                component="button"
              >
                {job?.company?.company_name}
              </Link>
            </Typography>
            <Typography variant="h5" component="p" style={{ marginBottom: 20 }}>
              ตำแหน่ง : {job?.job_name}
            </Typography>
            <Typography variant="h7" component="p" style={{ marginBottom: 5 }}>
              จำนวนคนที่รับ : {job?.avail_seat}
            </Typography>
            <Typography variant="h7" component="p">
              รายละเอียด :{job?.job_description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Description;
