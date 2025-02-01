import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: '#0d47a1' }}>
          About Future Guard
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#666', maxWidth: '800px', mx: 'auto', mb: 8 }}>
          Protecting your future with trust, innovation, and personalized care.
        </Typography>

        {/* Mission and Vision Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#0d47a1' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  At Future Guard, our mission is to provide reliable and innovative insurance solutions that safeguard your future. We are committed to delivering exceptional service, building lasting relationships, and ensuring peace of mind for our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#0d47a1' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#666' }}>
                  We envision a world where everyone feels secure and empowered to pursue their dreams. By leveraging cutting-edge technology and a client-first approach, we aim to redefine the insurance industry and set new standards for excellence.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Why Choose Us Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#0d47a1' }}>
            Why Choose Future Guard?
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                icon: '🌟',
                title: 'Expertise',
                description: 'With years of experience in the insurance industry, our team brings unparalleled expertise to help you navigate complex decisions.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We use the latest technology to simplify processes, provide real-time insights, and deliver tailored solutions.',
              },
              {
                icon: '❤️',
                title: 'Client-Centric Approach',
                description: 'Your needs come first. We listen, understand, and create personalized plans to protect what matters most to you.',
              },
            ].map((item, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#0d47a1' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call-to-Action Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#0d47a1' }}>
            Ready to Secure Your Future?
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', mb: 4 }}>
            Contact us today to learn more about our services and get a personalized quote.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#0d47a1',
              '&:hover': { backgroundColor: '#1565c0' },
              px: 6,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;