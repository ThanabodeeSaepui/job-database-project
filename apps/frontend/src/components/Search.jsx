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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Search = (props) => {
  const [jobDelete, setJobDelete] = useState([]);
  const [open, setOpen] = useState(false);
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
          `https://job-db-prod.onrender.com/api/sql/jobs?job=${location.state?.job.replace(
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
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setJobDelete(null);
  };

  const handleDelete = () => {
    axios
      .delete(`https://job-db-prod.onrender.com/api/sql/jobs/${jobDelete}`)
      .then(() => {
        setJobDelete(null);
        handleClose();
        refetch();
      });
  };

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
        <>
          <>
            {jobs.length ? (
              <>
                {jobs.map((job, index) => {
                  return (
                    <div key={index}>
                      <Container
                        maxWidth="m"
                        sx={{
                          m: 2,
                          width: { xs: 400, sm: 600, md: 800, lg: 1000 },
                        }}
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
                            <Typography variant="h4" gutterBottom>
                              {job.job_name}
                            </Typography>
                            <Typography variant="p" color="text.secondary">
                              จำนวนคนที่รับ : {job.avail_seat}
                              <br />
                              ประเภทงาน : {job.category.category_name}
                              <br />
                              บริษัท : {job.company.company_name}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              size="medium"
                              variant="contained"
                              sx={{ m: 1 }}
                              onClick={() => {
                                navigate(`/Description/${job.id}`);
                              }}
                            >
                              รายละเอียด
                            </Button>
                            <Button
                              size="medium"
                              variant="contained"
                              color="secondary"
                              sx={{ m: 1 }}
                              onClick={() => {
                                navigate(`/EditJob/${job.id}`);
                              }}
                            >
                              แก้ไขข้อมูล
                            </Button>
                            <Button
                              size="medium"
                              variant="contained"
                              color="error"
                              sx={{ m: 1 }}
                              onClick={() => {
                                handleClickOpen();
                                setJobDelete(job.id);
                              }}
                            >
                              ลบข้อมูล
                            </Button>
                          </CardActions>
                        </Card>
                      </Container>
                    </div>
                  );
                })}
              </>
            ) : (
              <div style={{ marginTop: 20 }}>No result.</div>
            )}
          </>
        </>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ต้องการลบโพสต์นี้หรือไม่"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete} style={{ fontWeight: 600 }}>
            Yes
          </Button>
          <Button
            color="error"
            style={{ fontWeight: 600 }}
            onClick={handleClose}
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Search;
