import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
              <Box component="img" src={logo} alt="JMKV Pharma Logo" sx={{ height: 48, width: 48, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                JMKV PHARMA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Committed to improving lives through innovative pharmaceutical solutions.
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              component={RouterLink}
              to="/products"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Products
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              About Us
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/career"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Careers
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              House no. 248/249 3rd floor, left side Block-B,
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Mohan Garden, Uttam Nagar (Near Himachal Sweet)
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              New Delhi, 110059
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +91 6392082970
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +91 9628414780
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: jmvkppvtltd@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} JMVK Pharma. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 