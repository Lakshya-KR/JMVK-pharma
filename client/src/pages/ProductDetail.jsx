import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import api from '../utils/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error loading product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography>Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                maxWidth: '100%',
                maxHeight: 400,
                objectFit: 'contain',
              }}
            />
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            Category: {product.category}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom>
            Product Information
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Composition"
                secondary={product.composition}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Dosage"
                secondary={product.dosage}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Price"
                secondary={`$${product.price.toFixed(2)}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Stock"
                secondary={product.stock > 0 ? `${product.stock} units available` : 'Out of stock'}
              />
            </ListItem>
          </List>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Contact for Order' : 'Out of Stock'}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Additional Information
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="body1" paragraph>
            This product is manufactured in compliance with international quality standards and regulations.
            For detailed information about usage, side effects, and precautions, please consult with a
            healthcare professional.
          </Typography>
          <Typography variant="body1">
            For bulk orders or distributor inquiries, please contact our sales team through the contact
            form or call our customer service.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProductDetail; 