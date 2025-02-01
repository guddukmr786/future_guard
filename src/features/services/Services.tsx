import { Box, Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';
const services = [
  {
    icon: '🏥',
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family.',
  },
  {
    icon: '🚗',
    title: 'Auto Insurance',
    description: 'Protect your vehicle with our reliable auto insurance plans.',
  },
  {
    icon: '🏠',
    title: 'Home Insurance',
    description: 'Safeguard your home and belongings with our tailored plans.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Life Insurance',
    description: 'Secure your family’s future with our life insurance solutions.',
  },
];
const Services = () => (
  <Container sx={{ textAlign: "center", py: 5, height: '84.6vh' }}>
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#0d47a1', mb: 2 }}>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
          We offer a wide range of insurance solutions to meet your unique needs. Explore our services below.
        </Typography>
      </Container>

      {/* Service Cards */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {service.icon}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call-to-Action Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#0d47a1', mb: 2 }}>
          Ready to Get Started?
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
          }}
        >
          Get a Quote
        </Button>
      </Container>
    </Box>
  </Container>
);
export default Services;