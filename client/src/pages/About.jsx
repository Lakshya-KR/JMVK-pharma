import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleIcon from '@mui/icons-material/People';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const values = [
    {
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      title: 'Research Excellence',
      description: 'Committed to advancing pharmaceutical research and development through innovation and scientific excellence.',
    },
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Healthcare',
      description: 'Dedicated to providing high-quality healthcare solutions that improve patient outcomes worldwide.',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Continuously innovating to develop new and improved pharmaceutical products and solutions.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Patient-Centric',
      description: 'Putting patients first in everything we do, ensuring their needs and well-being are our top priority.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          mb: { xs: 4, md: 8 },
          textAlign: 'center',
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          borderRadius: 3,
          p: { xs: 3, md: 6 },
          boxShadow: 3,
        }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} component="h1" gutterBottom>
          About JMVK Pharma
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          Advancing Healthcare Through Innovation
        </Typography>
      </Box>

      {/* Company Overview */}
      <Grid container spacing={4} sx={{ mb: { xs: 4, md: 8 } }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography paragraph>
            Founded with a vision to revolutionize healthcare, JMVK Pharma has grown into a leading
            pharmaceutical company dedicated to improving lives through innovative solutions. Our
            journey began with a simple yet powerful mission: to make quality healthcare accessible
            to all.
          </Typography>
          <Typography paragraph>
            Today, we stand as a testament to our commitment to excellence, innovation, and patient
            care. Our state-of-the-art facilities and dedicated team of professionals work
            tirelessly to develop and deliver pharmaceutical products that meet the highest
            standards of quality and efficacy.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/about-company.jpg"
            alt="JMVK Pharma Facility"
            sx={{
              width: '100%',
              height: { xs: 180, sm: 250, md: 320 },
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>

      {/* Mission and Vision */}
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: { xs: 4, md: 8 }, borderRadius: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              To improve global healthcare by developing and providing innovative pharmaceutical
              solutions that enhance the quality of life for patients worldwide. We are committed
              to maintaining the highest standards of quality, safety, and efficacy in all our
              products.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Vision
            </Typography>
            <Typography paragraph>
              To be a global leader in pharmaceutical innovation, recognized for our commitment to
              excellence, patient care, and sustainable healthcare solutions. We aim to transform
              the future of healthcare through continuous research and development.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Core Values */}
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Our Core Values
      </Typography>
      <Grid container spacing={4}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 2,
                borderRadius: 3,
                boxShadow: 2,
                background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fafbfc',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.04)',
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>{value.icon}</Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CSR Section */}
      <Box sx={{ mt: { xs: 4, md: 8 } }}>
        <Typography variant="h4" gutterBottom align="center">
          Corporate Social Responsibility
        </Typography>
        <Typography paragraph align="center">
          At JMVK Pharma, we believe in giving back to society and making a positive impact on
          the communities we serve. Our CSR initiatives focus on healthcare access, education,
          and environmental sustainability.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: 3, boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom>
                Healthcare Access
              </Typography>
              <Typography>
                Providing free medical camps and essential medicines to underprivileged
                communities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: 3, boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography>
                Supporting educational initiatives and providing scholarships to deserving
                students in the field of healthcare.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%', borderRadius: 3, boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom>
                Environmental Sustainability
              </Typography>
              <Typography>
                Implementing eco-friendly practices and reducing our carbon footprint through
                sustainable manufacturing processes.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 