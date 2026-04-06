import React from 'react';
import { Box, Container, Typography, Grid, Link, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';
import profile from '../assets/profile_nikita.jpeg';

const profileStats = [
  { label: 'Experience', value: '4+ Years' },
  { label: 'Active Users Served', value: '5000+' },
  { label: 'API Optimization', value: '20%' },
  { label: 'Crash Reduction', value: '15%' },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        bgcolor: '#0A192F', // Clean dark navy background
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 8,
              color: '#ccd6f6',
              textAlign: 'center',
              fontWeight: 800,
              letterSpacing: 1.5,
              '&::after': {
                content: '""',
                display: 'block',
                width: '80px',
                height: '4px',
                bgcolor: 'primary.main',
                mt: 2,
                mx: 'auto',
                borderRadius: 2,
                boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)',
              },
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={8} alignItems="center">
            {/* Left Column: Text and Stats */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ccd6f6',
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  Nikita Verma
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    mb: 3,
                    fontFamily: 'monospace',
                    fontSize: '1.1rem'
                  }}
                >
                  Mobile Application Engineer {'—'} <span style={{ color: '#8892b0' }}>Flutter & React Developer</span>
                </Typography>

                <Box sx={{ color: '#8892b0', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                  <Typography sx={{ mb: 2 }}>
                    I currently work at National Informatics Centre (NIC), Raipur, where I lead mobile development initiatives for government platforms. My work focuses on building secure, scalable, and user-friendly digital systems for public institutions.
                  </Typography>
                  <Typography>
                    My expertise includes cross-platform mobile development, face recognition attendance systems, geo-location services, Firebase analytics, crash monitoring, role-based access workflows, and performance optimization for large-scale production apps.
                  </Typography>
                </Box>

                {/* Glassmorphism Stats Grid */}
                <Grid container spacing={2} sx={{ mb: 5 }}>
                  {profileStats.map((stat, index) => (
                    <Grid item xs={6} sm={6} key={stat.label}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2.5,
                            bgcolor: 'rgba(17, 34, 64, 0.7)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(100,255,218,0.1)',
                            borderRadius: 3,
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'rgba(100, 255, 218, 0.4)',
                              boxShadow: '0 5px 15px rgba(100, 255, 218, 0.15)',
                              bgcolor: 'rgba(17, 34, 64, 0.9)',
                            }
                          }}
                        >
                          <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 800, mb: 0.5 }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ccd6f6', fontFamily: 'monospace', fontWeight: 600 }}>
                            {stat.label}
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Socials & Contact inline */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <motion.a
                      href="https://linkedin.com/in/nikita-verma-3h13097"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      style={{ color: '#64ffda', display: 'flex' }}
                    >
                      <FaLinkedin size={26} />
                    </motion.a>
                    <motion.a
                      href="https://github.com/Nikitaverma309"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      style={{ color: '#64ffda', display: 'flex' }}
                    >
                      <FaGithub size={26} />
                    </motion.a>
                  </Box>
                  <Box sx={{ width: '1px', height: '24px', bgcolor: 'rgba(255,255,255,0.2)' }} />
                  <Link
                    href="mailto:nikita305verma@gmail.com"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#8892b0',
                      textDecoration: 'none',
                      fontFamily: 'monospace',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    <EmailIcon fontSize="small" /> nikita305verma@gmail.com
                  </Link>
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column: Profile Image */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '250px', md: '300px' },
                    height: { xs: '250px', md: '300px' },
                    margin: '0 auto',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: '100%',
                      height: '100%',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: '12px',
                      zIndex: 0,
                      transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    },
                    '&:hover::after': {
                      top: '12px',
                      left: '12px',
                      boxShadow: '0 0 15px rgba(100, 255, 218, 0.4)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      position: 'relative',
                      zIndex: 1,
                      bgcolor: 'rgba(100, 255, 218, 0.2)', // Tint effect
                      transition: 'all 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(10, 25, 47, 0.3)', // Mix blend color
                        mixBlendMode: 'screen',
                        zIndex: 2,
                        transition: 'all 0.3s ease',
                      },
                      '&:hover::before': {
                        bgcolor: 'transparent',
                      },
                      '&:hover img': {
                        filter: 'none',
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <img
                      src={profile}
                      alt="Nikita Verma"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1)', // Start grayscale for that dev aesthetic
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;