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
    <Box id="experience" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ mb: 6, color: 'text.primary', textAlign: 'center', '&::after': { content: '""', display: 'block', width: '60px', height: '4px', bgcolor: 'primary.main', mt: 2, mx: 'auto' } }}>
            Experience
          </Typography>

          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, bgcolor: 'background.paper', borderRadius: 3 }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Mobile Application Engineer
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.primary', mt: 1 }}>
                  National Informatics Centre (NIC) • Raipur, Chhattisgarh
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  Feb 2023 – Present
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                Full-stack Mobile Application Engineer with 4+ years of experience building scalable government and enterprise-grade applications using Flutter, React.js, Node.js, and REST APIs. I focus on secure cross-platform systems, real-time attendance workflows, analytics integration, and performance optimization.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {techStack.map((item) => (
                  <Chip key={item} label={item} sx={{ bgcolor: 'background.default', color: 'primary.main' }} />
                ))}
              </Box>

              <Box component="ul" sx={{ pl: 3, color: 'text.secondary', m: 0 }}>
                {achievements.map((point) => (
                  <Typography component="li" key={point} variant="body1" sx={{ mb: 1.5, lineHeight: 1.8 }}>
                    {point}
                  </Typography>
                ))}
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;