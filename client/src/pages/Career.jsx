import { Container, Typography, Box, Paper, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

const Career = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could connect to a backend endpoint for job applications
    setSnackbar({ open: true, message: 'Application submitted! We will contact you soon.', severity: 'success' });
    setForm({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Careers at <span style={{ fontFamily: 'Qeensides', fontStyle: 'italic', fontWeight: 'bold', color: 'black' }}>JMVK Pharma</span>
      </Typography>
      <Typography align="center" sx={{ mb: 4 }}>
        We are always looking for talented individuals to join our team. Submit your details and we will get in touch if a suitable position is available.
      </Typography>
      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Message / Cover Letter"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Application
          </Button>
        </form>
      </Paper>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Career; 