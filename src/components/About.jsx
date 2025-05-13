import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: 'text.primary',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                bgcolor: 'primary.main',
                mt: 2,
              },
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                Nikita Verma
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                Senior Flutter Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                I am a Senior Flutter Developer with 3+ years of experience in mobile app development. 
                Currently working at National Informatics Centre, Raipur (C.G.), I specialize in developing 
                scalable, cross-platform applications using Flutter and Dart.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                My expertise includes developing real-time face recognition systems, location-based services, 
                and complex mobile applications. I have successfully delivered projects for government departments 
                and private organizations, ensuring high performance and user satisfaction.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Link
                  href="https://verma-34a97a227"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'primary.main' }}
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://github.com/Nikitaverma309"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'primary.main' }}
                >
                  <FaGithub size={24} />
                </Link>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 1,
                }}
              >
                Email: nverma@gmail.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                Phone: (+91) 72212735124
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: '2px solid',
                    borderColor: 'primary.main',
                    transform: 'translate(20px, 20px)',
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/profile.jpg"
                  alt="Nikita Verma"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '4px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;