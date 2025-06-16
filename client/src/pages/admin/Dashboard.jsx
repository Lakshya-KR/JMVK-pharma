import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import ProductManager from './ProductManager';
import ContactManager from './ContactManager';

const AdminDashboard = () => {
  const [tab, setTab] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleTabChange = (event, newValue) => setTab(newValue);
  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

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
    </Container>
  );
};

export default AdminDashboard; 