import Navbar from "./Navbar";
import "./style/bg.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate, useParams } from "react-router-dom";

const Company = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [companyDelete, setCompanyDelete] = useState([]);
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setCompanyDelete(null);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/sql/companies/${companyDelete}`)
      .then(() => {
        setCompanyDelete(null);
        handleClose();
        navigate("/");
        console.log("test");
      });
  };

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
            <Typography variant="h7" component="p" style={{ marginBottom: 5 }}>
              ที่อยู่บริษัท : {company?.address}
            </Typography>
            <Typography variant="h7" component="p">
              ช่องทางการติดต่อ : {company?.contact}
            </Typography>
            <Typography variant="h7" component="p" style={{ marginBottom: 30 }}>
              รายละเอียด : {company?.description}
            </Typography>
            <div align="center">
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                sx={{ mr: 3 }}
                onClick={() => navigate(`/EditCompany/${id}`)}
              >
                แก้ไขข้อมูล
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="error"
                onClick={() => {
                  handleClickOpen();
                  setCompanyDelete(company?.id);
                }}
              >
                ลบข้อมูล
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ต้องการลบบริษัทนี้หรือไม่"}
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

export default Company;
