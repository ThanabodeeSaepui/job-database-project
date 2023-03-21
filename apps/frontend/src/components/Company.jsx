import Navbar from "./Navbar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

const Company = () => {
  return (
    <div>
      <Navbar />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 4, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h6" component="p">
          ที่อยู่บริษัท : 
        </Typography>
        <Typography variant="h6" component="p">
          ช่องทางการติดต่อ :
        </Typography>
        <Typography variant="h6" component="p">
          รายละเอียด :
        </Typography>
        <Card sx={{ minWidth: 275, maxWidth: 800, width: 600, height:400, mt:2}}>
          <CardContent>
            
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Company;
