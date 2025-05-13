import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ mb: 2 }}
          >
            Hi, my name is
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'text.primary',
            }}
          >
            Nikita Verma
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              color: 'text.secondary',
            }}
          >
            I build things for the web.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
              mb: 4,
              color: 'text.secondary',
            }}
          >
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              component="a"
              href="#contact"
              sx={{
                display: 'inline-block',
                px: 4,
                py: 2,
                border: '1px solid',
                borderColor: 'primary.main',
                color: 'primary.main',
                textDecoration: 'none',
                borderRadius: 1,
                '&:hover': {
                  bgcolor: 'rgba(100, 255, 218, 0.1)',
                },
              }}
            >
              Get In Touch
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 