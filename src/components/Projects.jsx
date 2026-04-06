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
    title: 'HRMIS – Government of Chhattisgarh',
    description: 'Designed and developed a government-grade Human Resource Management Information System for state colleges featuring face recognition-based attendance, geo-location verification, multi-level role-based access, and centralized real-time monitoring dashboards.',
    image: logo,
    technologies: ['Flutter', 'REST APIs', 'Face Recognition', 'Geo-location', 'RBAC'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://heonline.cg.nic.in/',
  },
  {
    title: 'Chhattisgarh Budget App',
    description: 'Built and deployed the official Finance Department application enabling access to 10,000+ government budget documents with advanced search, filtering, and multilingual support.',
    image: cgBudget,
    technologies: ['Flutter', 'Document Search', 'Multilingual Support', 'State Management'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.cgbudget&hl=en_IN&pli=1',
  },
  {
    title: 'Blue Birds Kindergarten Management System',
    description: 'Developed a comprehensive school management app with live classroom streaming, attendance tracking, fee management, parent notifications, and multimedia content sharing using Flutter and Firebase.',
    image: bbk,
    technologies: ['Flutter', 'Firebase', 'Live Streaming', 'Notifications'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.fixingdots.htkc.bbk_parent',
  },
  {
    title: 'FixQ Marketplace',
    description: 'Engineered a cross-platform auto-parts marketplace application with product catalog, vendor panel, shopping cart, order tracking, and secure payment integration via RESTful APIs.',
    image: fixq,
    technologies: ['Flutter', 'Marketplace', 'REST APIs', 'Payment Integration'],
    github: 'https://github.com/Nikitaverma309',
    live: 'https://play.google.com/store/apps/details?id=com.fixingdots.htkc.fixq&hl=en_IN',
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        bgcolor: '#112240', // Slightly lighter navy for alternating section backgrounds
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
              mb: 8,
              color: 'text.primary',
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
            Featured Projects
          </Typography>
          <Grid container spacing={5}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'rgba(10, 25, 47, 0.7)', // Deep navy card
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      overflow: 'visible', // Allow image to pop out slightly
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.3)',
                        borderColor: 'rgba(100, 255, 218, 0.4)',
                        '& .project-logo-container': {
                          transform: 'scale(1.05) translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(100, 255, 218, 0.4)',
                          borderColor: '#64ffda',
                        },
                        '& .project-title': {
                          color: '#64ffda',
                        }
                      },
                    }}
                  >
                    <Box
                      className="project-logo-container"
                      sx={{
                        width: '180px',
                        height: '180px',
                        margin: '-30px auto 20px', // Pull it up slightly out of the card
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(100, 255, 218, 0.1)',
                        bgcolor: '#fff',
                        transition: 'all 0.4s ease',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                        zIndex: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          p: 2, // Padding so logos don't get cut off by circle
                        }}
                        image={project.image}
                        alt={project.title}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, pt: 0, px: 4, pb: 2, textAlign: 'center' }}>
                      <Typography
                        className="project-title"
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ 
                          color: 'text.primary', 
                          fontWeight: 'bold',
                          transition: 'color 0.3s ease',
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          mb: 3, 
                          lineHeight: 1.6,
                          minHeight: '80px',
                          textAlign: 'left' // Better readability for long descriptions
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(100, 255, 218, 0.05)',
                              color: 'primary.main',
                              border: '1px solid rgba(100, 255, 218, 0.2)',
                              fontFamily: 'monospace',
                              fontWeight: 600,
                              transition: 'all 0.2s',
                              '&:hover': {
                                bgcolor: 'rgba(100, 255, 218, 0.15)',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3, gap: 2 }}>
                      <Button
                        size="medium"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{ 
                          color: 'text.secondary',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'rgba(100, 255, 218, 0.1)'
                          }
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        size="medium"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        sx={{ 
                          color: 'primary.main',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          borderBottom: '1px solid transparent',
                          '&:hover': {
                            bgcolor: 'rgba(100, 255, 218, 0.1)',
                          }
                        }}
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