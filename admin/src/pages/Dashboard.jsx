import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import ProductManager from './ProductManager';
import ContactManager from './ContactManager';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth';

const Dashboard = () => {
  const [tab, setTab] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => setTab(newValue);
  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        Admin Dashboard
      </Typography>
      <Paper sx={{ mb: 4 }}>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Manage Products" />
          <Tab label="Contact Messages" />
        </Tabs>
      </Paper>
      <Box hidden={tab !== 0}>
        <ProductManager setSnackbar={setSnackbar} />
      </Box>
      <Box hidden={tab !== 1}>
        <ContactManager setSnackbar={setSnackbar} />
      </Box>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default Dashboard; 