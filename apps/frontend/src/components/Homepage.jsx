import Navbar from "./Navbar";
import image1 from "./image/image1.jpg";
import image2 from "./image/image4.jpg";
import image3 from "./image/image3.jpg";
import "../components/style/Homepage.css";
import "./style/bg.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
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
    navigate("/search", {
      state: { job: job, category: category, company: company },
    });
  };

  return (
    <div>
      <Navbar />
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>!! โฆษณา !!</h5>
              <p>สนใจติดต่อโฆษณาได้ที่ช่องทางนี้ xxxxxxxxxx</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>!! โฆษณา !!</h5>
              <p>สนใจติดต่อโฆษณาได้ที่ช่องทางนี้ xxxxxxxxxx</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>!! โฆษณา !!</h5>
              <p>สนใจติดต่อโฆษณาได้ที่ช่องทางนี้ xxxxxxxxxx</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Container
        sx={{ mt: 5, mb: 5, width: { xs: 400, sm: 600, md: 800, lg: 1000 } }}
      >
        <Card
          sx={{
            // minWidth: 275,
            // maxWidth: 800,
            // width: 600,
            height: 370,
            mt: 2,
            border: 1,
            borderRadius: "16px",
            boxShadow: "10px 10px grey",
          }}
        >
          <CardContent>
            <div className="m-3">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  ประเภทงาน
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected>กรุณาเลือกประเภทงานที่สนใจ</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
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
              <button
                type="submit"
                className="btn btn-warning"
                onClick={handleSearch}
              >
                ค้นหา
              </button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Homepage;
