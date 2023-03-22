import Navbar from "./Navbar";
import "./style/bg.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

const Company = () => {
  return (
    <div className="bg">
      <Navbar />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 15, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          ชื่อบริษัท
        </Typography>
        <Typography variant="h7" component="p">
          ที่อยู่บริษัท : 
        </Typography>
        <Typography variant="h7" component="p">
          ช่องทางการติดต่อ :
        </Typography>
        <Typography variant="h7" component="p">
          รายละเอียด :
        </Typography>
        <Card sx={{ minWidth: 275, maxWidth: 800, width: 600, height:350, mt:2}}>
          <CardContent>
            
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Company;
