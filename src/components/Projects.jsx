import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import bbk from '../assets/bbk.webp';
import cgBudget from '../assets/cgBudget.webp'; 
import fixq from '../assets/fixq.webp';
import logo from '../assets/logo.png';
//                 mx: 'auto',
const projects = [
  {
    title: 'HE HRIMS',
    description: 'Developed a mobile-based Face Attendance System for the Higher Education Department. The app uses real-time face recognition and location verification to mark employee attendance across all colleges. Ensures secure, accurate, and paperless attendance accessible online by authorized institutions.',
    image: logo,
    imageStyle: {
      width: '100%', // Changed to 100% width
      height: '150', // Increased height
      objectFit: 'contain', // Changed to contain to show full image
      margin: '15px 0' // Added margin for spacing
    },
    technologies: ['Flutter', 'Dart', 'Face Recognition', 'Location Services'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://heonline.cg.nic.in/',
  },
  {
    title: 'Chhattisgarh Budget',
    description: 'Official app of the Finance Department, Govt. of Chhattisgarh, providing public access to budget documents in a user-friendly format.',
    image: cgBudget,
   
    technologies: ['Flutter', 'Dart', 'PDF Viewer', 'State Management'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.cgbudget&hl=en_IN&pli=1',
  },
  {
    title: 'Blue birds Kindergarten',
    description: 'An interactive and innovative school management software with features like live classroom streaming, student attendance, fees management, curriculum tracking, and notifications.',
    image: bbk,
  
    technologies: ['Flutter', 'Dart', 'Real-time Streaming', 'Payment Integration'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.fixingdots.htkc.bbk_parent',
  },
  {
    title: 'Fixq',
    description: 'An online marketplace connecting automobile parts with potential customers. A modern and advanced HeadStart solution for business growth and revenue targets.',
    image: fixq,
   
    technologies: ['Flutter', 'Dart', 'API Integration', 'Payment Gateway'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.fixingdots.htkc.fixq&hl=en_IN',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
              mb: 6,
              color: 'text.primary',
              textAlign: 'center',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                bgcolor: 'primary.main',
                mt: 2,
                mx: 'auto',
              },
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.default',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '200px',
                        height: '200px',
                        margin: '20px auto',
                        borderRadius: '50%',
                        overflow: 'hidden',
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        image={project.image}
                        alt={project.title}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ color: 'text.primary' }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'background.paper',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{ color: 'primary.main' }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        sx={{ color: 'primary.main' }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;