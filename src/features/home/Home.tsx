import { Box, Typography, Container, Grid, Button, Card } from "@mui/material";
import Slider from "../slider/Slider";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/contact-us");
  }
  return (
    <Box>
      {/* Slider Section */}
      <Slider />

      {/* Welcome Section */}
      <Container sx={{ textAlign: "center", py: 5, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="h2" color="primary" fontWeight="bold">
          Welcome to Future Guard
        </Typography>
        <Typography variant="h4" color="secondary" mt={2}>
          We provide the best insurance services tailored to your needs.
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '800px', mx: 'auto' }}>
          At Future Guard Insurance, we understand that protecting what matters most to you is a top priority. That's why we’ve created a team of experienced, dedicated brokers who are committed to offering tailored insurance solutions that meet your unique needs.
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '800px', mx: 'auto' }}>
          As an independent insurance brokerage, we work with a wide range of trusted insurance providers, ensuring that you have access to the best rates and coverage options available. Whether you’re looking for personal, business, or specialized coverage, our team takes the time to listen, understand, and guide you through the insurance process to make sure you're fully protected for whatever the future holds.
        </Typography>
      </Container>

      {/* Service Highlights Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: '#0d47a1' }}>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
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
            ].map((service, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 3, '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', transition: 'all 0.3s ease' } }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {service.icon}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#0d47a1' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {service.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: '#0d47a1' }}>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Guddu Kumar',
                testimonial: 'Future Guard provided me with the best insurance solutions for my family. Their team is professional and caring!',
              },
              {
                name: 'Azhar Alam',
                testimonial: 'I highly recommend Future Guard for their excellent service and competitive rates. They made the process so easy!',
              },
              {
                name: 'Yaseen Akhtar',
                testimonial: 'The team at Future Guard truly cares about their clients. They helped me find the perfect coverage for my business.',
              },
            ].map((testimonial, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Card sx={{ height: '100%', p: 3, boxShadow: 3 }}>
                  <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                    "{testimonial.testimonial}"
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
                    - {testimonial.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: '#0d47a1', color: '#fff', py: 8 }}>
        <Container>
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {[
              {
                number: '10,000+',
                label: 'Happy Clients',
              },
              {
                number: '15+',
                label: 'Years of Experience',
              },
              {
                number: '50+',
                label: 'Insurance Partners',
              },
            ].map((stat, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#FFFFFF' }}>
                  {stat.number}
                </Typography>
                <Typography variant="h5" sx={{ color: '#FFFFFF' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4, color: '#0d47a1' }}>
            Ready to Protect Your Future?
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', mb: 4 }}>
            Contact us today to get a personalized quote and secure your future.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#0d47a1',
              '&:hover': { backgroundColor: '#1565c0' },
              px: 6,
            }}
            onClick={handleClick}
          >
            Get a Quote
          </Button>
        </Container>
      </Box>
    </Box >
  )
};

export default Home;