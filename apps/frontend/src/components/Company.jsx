import Navbar from "./Navbar";
import "./style/bg.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Company = () => {
  let { id } = useParams();
  const [company, setCompany] = useState({});
  const { isLoading, data } = useQuery({
    queryFn: () => {
      return axios
        .get(`http://localhost:8080/api/sql/companies/${id}`)
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setCompany(data);
    }
  }, [data]);

  return (
    <div className="bg">
      <Navbar />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 15, pb: 6, width: { xs: "70%", lg: 800 } }}
      >
        <Card
          sx={{
            // minWidth: 275,
            // maxWidth: 800,
            // width: 600,
            // height: 500,
            mt: 2,
            border: 1,
            borderRadius: "16px",
          }}
        >
          <CardContent sx={{ m: 3 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {company?.company_name}
            </Typography>
            <Typography variant="h7" component="p">
              ที่อยู่บริษัท : {company?.address}
            </Typography>
            <Typography variant="h7" component="p">
              ช่องทางการติดต่อ : {company?.contact}
            </Typography>
            <Typography variant="h7" component="p">
              รายละเอียด : {company?.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Company;
