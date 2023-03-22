import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";

const Serch = (props) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const { isLoading, isError, data, error, refetch } = useQuery({
    fetchPolicy: "no-cache",
    cacheTime: 0,
    queryFn: () => {
      return axios
        .get(
          `http://localhost:8080/api/sql/jobs?job=${location.state?.job.replace(
            " ",
            "_"
          )}&category=${location.state?.category.replace(
            " ",
            "_"
          )}&company=${location.state?.company.replace(" ", "_")}`
        )
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setJobs(data);
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 8 }}
      >
        {jobs.map((job, index) => {
          return (
            <div key={index}>
              <Container
                maxWidth="m"
                sx={{ m: 2, width: { xs: 400, sm: 600, md: 800, lg: 1000 } }}
              >
                <Card
                  sx={{
                    // minWidth: 275,
                    // maxWidth: 800,
                    border: 1,
                    borderRadius: "16px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      gutterBottom
                    >
                      {job.job_name}
                    </Typography>
                    {/* <Typography variant="h5" component="div">
                  {job.job_description}
                </Typography> */}
                    <Typography variant="p" color="text.secondary">
                      จำนวนคนที่รับ : {job.avail_seat}
                    </Typography>
                    <Typography variant="body2">
                      ประเภทงาน : {job.category.category_name}
                      <br />
                      บริษัท : {job.company.company_name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="medium"
                      variant="outlined"
                      sx={{ m: 1 }}
                      onClick={() => {
                        navigate(`/Description/${job.id}`);
                      }}
                    >
                      รายละเอียด
                    </Button>
                    <Button
                      size="medium"
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate(`/EditJob/${job.id}`);
                      }}
                    >
                      แก้ไขข้อมูล
                    </Button>
                    <Button
                      size="medium"
                      variant="outlined"
                      color="error"
                      href="#"
                    >
                      ลบข้อมูล
                    </Button>
                  </CardActions>
                </Card>
              </Container>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Serch;
