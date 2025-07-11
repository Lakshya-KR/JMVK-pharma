import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../utils/api';

const statusOptions = ['pending', 'read', 'replied'];

const ContactManager = ({ setSnackbar }) => {
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem('token');

  const fetchMessages = async () => {
    try {
      const res = await api.get('/contact');
      setMessages(res.data);
    } catch (err) {
      setSnackbar && setSnackbar({ open: true, message: 'Failed to fetch messages', severity: 'error' });
    }
  };

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await api.patch(`/contact/${id}`, { status });
      setSnackbar && setSnackbar({ open: true, message: 'Status updated', severity: 'success' });
      fetchMessages();
    } catch (err) {
      setSnackbar && setSnackbar({ open: true, message: 'Error updating status', severity: 'error' });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await api.delete(`/contact/${id}`);
      setSnackbar && setSnackbar({ open: true, message: 'Contact deleted', severity: 'success' });
      fetchMessages();
    } catch (err) {
      setSnackbar && setSnackbar({ open: true, message: 'Error deleting contact', severity: 'error' });
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Contact Messages
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((msg) => (
              <TableRow key={msg._id}>
                <TableCell>{msg.name}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.phone}</TableCell>
                <TableCell>{msg.subject}</TableCell>
                <TableCell>
                  <Select
                    value={msg.status}
                    onChange={(e) => handleStatusChange(msg._id, e.target.value)}
                    size="small"
                  >
                    {statusOptions.map((status) => (
                      <MenuItem key={status} value={status}>{status}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(msg._id)}><DeleteIcon /></IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContactManager; 