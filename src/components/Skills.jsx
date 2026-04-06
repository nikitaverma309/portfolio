import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

// Material Design Icons (react-icons/md)
import {
  MdAndroid,
  MdCode,
  MdSecurity,
  MdHtml,
  MdInsights,
  MdStorage,
  MdDevices,
  MdOutlineJavascript,
  MdOutlineLeaderboard,
  MdDeveloperMode,
  MdBuild,
  MdCloud,
  MdLaptopMac,
  MdTerminal,
  MdGpsFixed,
} from 'react-icons/md';

// Skill data categorized conceptually
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: 'Dart', icon: MdDeveloperMode, level: 95 },
      { name: 'JavaScript', icon: MdOutlineJavascript, level: 80 },
      { name: 'HTML/CSS', icon: MdHtml, level: 85 },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: 'Flutter', icon: MdDevices, level: 95 },
      { name: 'React.js', icon: MdCode, level: 85 },
      { name: 'Node.js', icon: MdBuild, level: 75 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'MySQL', icon: MdStorage, level: 80 },
      { name: 'MongoDB', icon: MdOutlineLeaderboard, level: 75 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: 'Firebase', icon: MdCloud, level: 88 },
      { name: 'Git/GitHub', icon: MdCloud, level: 90 },
      { name: 'VS Code', icon: MdTerminal, level: 95 },
      { name: 'Android Studio', icon: MdAndroid, level: 90 },
      { name: 'Mac/Linux', icon: MdLaptopMac, level: 85 },
    ]
  },
  {
    title: "Core Concepts & APIs",
    skills: [
      { name: 'REST APIs', icon: MdBuild, level: 90 },
      { name: 'Geo-location', icon: MdGpsFixed, level: 85 },
      { name: 'Secure Authentication', icon: MdSecurity, level: 85 },
      { name: 'Crashlytics / Analytics', icon: MdInsights, level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        bgcolor: '#0A192F', // Deep navy background to match modern portfolio styles
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
              letterSpacing: 2,
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
            Skills & Technologies
          </Typography>

          {skillCategories.map((category, catIndex) => (
            <Box key={category.title} sx={{ mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: 'primary.main',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
                    pb: 1,
                    display: 'inline-block'
                  }}
                >
                  {category.title}
                </Typography>
              </motion.div>

              <Grid container spacing={4}>
                {category.skills.map((skill, index) => (
                  <Grid item xs={6} sm={4} md={3} key={skill.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          bgcolor: 'rgba(17, 34, 64, 0.7)', // Slightly lighter navy card
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(100, 255, 218, 0.1)',
                          borderRadius: 3,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.05), transparent)',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.6s ease',
                          },
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0 15px 30px -10px rgba(100, 255, 218, 0.3)',
                            borderColor: 'rgba(100, 255, 218, 0.5)',
                            bgcolor: 'rgba(17, 34, 64, 0.95)',
                            '&::before': {
                              transform: 'translateX(100%)',
                            },
                            '& .skill-icon': {
                              color: '#fff',
                              transform: 'scale(1.15) rotate(5deg)',
                              filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.8))',
                            },
                            '& .skill-name': {
                              color: '#fff',
                            }
                          },
                        }}
                      >
                        <Box
                          className="skill-icon"
                          component={skill.icon}
                          sx={{
                            fontSize: 50,
                            color: 'primary.main',
                            mb: 2,
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                          }}
                        />
                        <Typography
                          className="skill-name"
                          variant="h6"
                          sx={{
                            color: 'text.secondary',
                            mb: 2,
                            fontWeight: 600,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {skill.name}
                        </Typography>

                        {/* Progress Bar Container */}
                        <Box
                          sx={{
                            width: '100%',
                            height: 6,
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            overflow: 'hidden',
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            style={{
                              height: '100%',
                              background: 'linear-gradient(90deg, #64ffda 0%, #00bfa5 100%)',
                              boxShadow: '0 0 10px rgba(100, 255, 218, 0.8)',
                              borderRadius: '8px',
                            }}
                          />
                        </Box>
                        {/* Level Percentage Indicator */}
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            mt: 1,
                            color: 'primary.main',
                            fontWeight: 'bold',
                            opacity: 0.8
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
