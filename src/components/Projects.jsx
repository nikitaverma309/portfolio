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
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.live}
                        target="_blank"
                        sx={{ color: 'primary.main' }}
                      >
                        View Project
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