import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import logo from '../assets/logo.svg';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products?limit=3');
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: '100vw',
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          px: 0,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant={isMobile ? 'h4' : 'h3'} component="h1" gutterBottom>
                Advancing Healthcare Through Innovation
              </Typography>
              <Typography variant={isMobile ? 'body1' : 'h5'} paragraph>
                JMVK Pharma is committed to developing and providing high-quality pharmaceutical products that improve lives worldwide.
              </Typography>
              <Button
                component={RouterLink}
                to="/products"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2, fontWeight: 600, borderRadius: 2 }}
              >
                Explore Products
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Box
                component="img"
                src="/hero-image.jpg"
                alt="Pharmaceutical Research"
                sx={{
                  width: { xs: '90%', md: '80%' },
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 4,
                  mt: { xs: 4, md: 0 },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ bgcolor: 'grey.900', color: 'grey.100', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', position: 'relative', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? 'h5' : 'h3'} component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Featured Products
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
            {featuredProducts.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fff',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={RouterLink}
                      to={`/products/${product._id}`}
                      size="small"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ bgcolor: 'background.default', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', position: 'relative', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="img" src={logo} alt="JMKV Pharma Logo" sx={{ height: 56, width: 56, mr: 2 }} />
                <Typography variant={isMobile ? 'h5' : 'h3'} component="h2" gutterBottom sx={{ fontWeight: 600, color: '#2c3e50' }}>
                  About JMKV Pharma
                </Typography>
              </Box>
              <Typography paragraph sx={{ color: '#222' }}>
                We are a leading pharmaceutical company dedicated to improving global healthcare through innovative solutions and high-quality products.
              </Typography>
              <Typography paragraph sx={{ color: '#222' }}>
                Our commitment to research, development, and excellence has made us a trusted name in the pharmaceutical industry.
              </Typography>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                color="primary"
                sx={{ mt: 2, fontWeight: 600, borderRadius: 2 }}
              >
                Learn More About Us
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Box
                component="img"
                src="/about-image.jpg"
                alt="About JMVK Pharma"
                sx={{
                  width: { xs: '90%', md: '80%' },
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 4,
                  mt: { xs: 4, md: 0 },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
