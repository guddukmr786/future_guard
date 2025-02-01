import React from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Card, CardContent } from '@mui/material';

const Contact: React.FC = () => {
  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log('Form Data:', data);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: '#0d47a1' }}>
          Contact Us
        </Typography>
        <Grid container spacing={6}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#0d47a1' }}>
                  Send Us a Message
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  {/* Name Field */}
                  <TextField
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    required
                  />

                  {/* Email Field */}
                  <TextField
                    name="email"
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />

                  {/* Message Field */}
                  <TextField
                    name="message"
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#0d47a1',
                      '&:hover': { backgroundColor: '#1565c0' },
                      alignSelf: 'flex-start',
                      px: 6,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Details and Map Section */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#0d47a1' }}>
                  Our Contact Details
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                  We’d love to hear from you! Reach out to us via phone, email, or visit our office.
                </Typography>

                {/* Address */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
                    Address
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    123 Future Guard Lane, Suite 456
                    <br />
                    New York, NY 10001
                  </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    +1 (123) 456-7890
                  </Typography>
                </Box>

                {/* Email */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    info@futureguard.com
                  </Typography>
                </Box>

                {/* Embedded Google Map */}
                <Box sx={{ height: '300px', borderRadius: 2, overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792579763!2d-73.9877316845936!3d40.74844047932787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903f2b3f3a1%3A0x4b1c3e6b5f6e4f4d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;