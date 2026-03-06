import React from 'react';
import { Box, Container, Typography, Grid, Link, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  Nikita Verma
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    mb: 3,
                  }}
                >
                  Mobile Application Engineer — Flutter & React Developer
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  I currently work at National Informatics Centre (NIC), Raipur, where I lead mobile development initiatives for government platforms. My work focuses on building secure, scalable, and user-friendly digital systems for public institutions.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: false }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  My expertise includes cross-platform mobile development, face recognition attendance systems, geo-location services, Firebase analytics, crash monitoring, role-based access workflows, and performance optimization for large-scale production apps.
                </Typography>
              </motion.div>
              <Stack spacing={2} sx={{ mb: 3 }}>
                {profileStats.map((stat) => (
                  <Paper key={stat.label} elevation={0} sx={{ p: 2, bgcolor: 'background.default', border: '1px solid rgba(100,255,218,0.12)' }}>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{stat.label}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>{stat.value}</Typography>
                  </Paper>
                ))}
              </Stack>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Link
                  href="https://linkedin.com/in/nikita-verma-3h13097"
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
                Email: nikita305verma@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '250px',
                  height: '250px',
                  margin: '0 auto',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '4px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    zIndex: 0,
                  },
                }}
              >
                <motion.img
                  src={profile}
                  alt="Nikita Verma"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '50%',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
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