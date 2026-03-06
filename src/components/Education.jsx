import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <Box id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ mb: 6, color: 'text.primary', textAlign: 'center', '&::after': { content: '""', display: 'block', width: '60px', height: '4px', bgcolor: 'primary.main', mt: 2, mx: 'auto' } }}>
            Education
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', bgcolor: 'background.default', borderRadius: 3 }}>
                <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5 }}>
                  Master of Computer Science in Information Technology
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                  Pt. Ravi Shankar Shukla University • Raipur, Chhattisgarh
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                  Aug 2020 – Jul 2022
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  Score: 78.4%
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                  Coursework included Data Structures & Algorithms, Object-Oriented Programming, Software Design, Computer Organization, Systems & Networks, Design of Algorithms, and Database Systems.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', bgcolor: 'background.default', borderRadius: 3 }}>
                <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 700, mb: 2 }}>
                  Extra Involvement
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                  Participated in a Robotics Hackathon and built an Arduino-based bot that was showcased at IIT Kanpur in 2017.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;