import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Box id="education" sx={{ py: 12, bgcolor: '#0A192F' }}>
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
            Education & Extras
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: { xs: 4, md: 5 }, 
                    height: '100%', 
                    bgcolor: 'rgba(17, 34, 64, 0.7)', 
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
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #64ffda 0%, transparent 100%)',
                      boxShadow: '0 2px 10px rgba(100, 255, 218, 0.5)',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.3)',
                      borderColor: 'rgba(100, 255, 218, 0.3)',
                      bgcolor: 'rgba(17, 34, 64, 0.9)',
                    }
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 1.5 }}>
                    Master of Computer Science (IT)
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 1, fontSize: '1.1rem' }}>
                    Pt. Ravi Shankar Shukla University <span style={{color: '#ccd6f6'}}>•</span> Raipur, CG
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8892b0', mb: 2, fontFamily: 'monospace', fontSize: '1rem' }}>
                    Aug 2020 – Jul 2022 <span style={{ margin: '0 8px', color: 'primary.main' }}>|</span> Score: 78.4%
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.9, fontSize: '1.05rem', mt: 3 }}>
                    Coursework included Data Structures & Algorithms, Object-Oriented Programming, Software Design, Computer Organization, Systems & Networks, Design of Algorithms, and Database Systems.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: { xs: 4, md: 5 }, 
                    height: '100%', 
                    bgcolor: 'rgba(17, 34, 64, 0.7)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(0deg, #64ffda 0%, transparent 100%)',
                      boxShadow: '0 2px 10px rgba(100, 255, 218, 0.5)',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.3)',
                      borderColor: 'rgba(100, 255, 218, 0.3)',
                      bgcolor: 'rgba(17, 34, 64, 0.9)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Typography 
                      sx={{ 
                        color: 'primary.main', 
                        fontSize: '1.5rem', 
                        mr: 1.5 
                      }}
                    >
                      ★
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 700 }}>
                      Extra Involvement
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.9, fontSize: '1.05rem' }}>
                    Participated in a Robotics Hackathon and built an Arduino-based bot that was showcased at IIT Kanpur in 2017.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;