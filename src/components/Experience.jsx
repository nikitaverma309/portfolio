import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const achievements = [
  'Built HRMIS mobile application from scratch for Chhattisgarh higher education colleges.',
  'Implemented face recognition attendance with geo-location verification for secure and paperless operations.',
  'Designed multi-level role-based access for Director, State, District, Institute, and Employee workflows.',
  'Improved API response performance by 20% and contributed to 15% crash reduction using Firebase Crashlytics.',
  'Supported production apps serving 5000+ active users and 10,000+ government budget documents.',
];

const techStack = [
  'Flutter',
  'React.js',
  'Node.js',
  'REST APIs',
  'Firebase',
  'Face Recognition',
  'Geo-location',
  'Crashlytics',
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 12, bgcolor: '#112240' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
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
              } 
            }}
          >
            Experience
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 5 }, 
                bgcolor: 'rgba(10, 25, 47, 0.7)', 
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(100, 255, 218, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  bgcolor: 'primary.main',
                  boxShadow: '2px 0 10px rgba(100, 255, 218, 0.5)',
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.3)',
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  bgcolor: 'rgba(10, 25, 47, 0.85)',
                }
              }}
            >
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                    Mobile Application Engineer
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#ccd6f6', fontWeight: 600 }}>
                    National Informatics Centre (NIC) <span style={{color: 'primary.main'}}>•</span> Raipur, Chhattisgarh
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8892b0', mt: 1, fontFamily: 'monospace', fontSize: '1rem' }}>
                    Feb 2023 – Present
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.9, fontSize: '1.05rem' }}>
                  Full-stack Mobile Application Engineer with 4+ years of experience building scalable government and enterprise-grade applications using Flutter, React.js, Node.js, and REST APIs. I focus on secure cross-platform systems, real-time attendance workflows, analytics integration, and performance optimization.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, py: 1 }}>
                  {techStack.map((item) => (
                    <Chip 
                      key={item} 
                      label={item} 
                      sx={{ 
                        bgcolor: 'rgba(100, 255, 218, 0.05)', 
                        color: 'primary.main',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(100, 255, 218, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }} 
                    />
                  ))}
                </Box>

                <Box component="ul" sx={{ pl: 2, color: '#8892b0', m: 0, listStyle: 'none' }}>
                  {achievements.map((point) => (
                    <Box component="li" key={point} sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
                      <Typography 
                        component="span" 
                        sx={{ 
                          color: 'primary.main', 
                          mr: 2,
                          mt: 0.5,
                          fontSize: '0.8rem'
                        }}
                      >
                        ▹
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;