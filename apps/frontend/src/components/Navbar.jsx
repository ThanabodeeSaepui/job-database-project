import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';

const Navbar = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="inherit"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              หน้าหลัก
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="/createjob"
              sx={{ my: 1, mx: 1.5 }}
            >
              โพสต์งาน
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="/createcompany"
              sx={{ my: 1, mx: 1.5 }}
            >
              เพิ่มบริษัท
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="/description"
              sx={{ my: 1, mx: 1.5 }}
            >
              รายละเอียด
            </Link>
            {/* <Link
              variant="button"
              color="text.primary"
              href="/serch"
              sx={{ my: 1, mx: 1.5 }}
            >
              ค้นหา
            </Link> */}
            <Link
              variant="button"
              color="inherit"
              href="/company"
              sx={{ my: 1, mx: 1.5 }}
            >
              บริษัท
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
