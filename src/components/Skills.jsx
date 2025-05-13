import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

// Material Design Icons (react-icons/md)
import {
  MdAndroid,
  MdCode,
  MdHtml,
  MdStorage,
  MdDevices,
  MdOutlineJavascript,
  MdOutlineLeaderboard,
  MdDeveloperMode,
  MdBuild,
  MdCloud,
  MdLaptopMac,
  MdTerminal,
} from 'react-icons/md';

// Skill data with Material icons
const skills = [
  { name: 'Dart', icon: MdDeveloperMode, level: 95 },
  { name: 'Flutter', icon: MdDevices, level: 95 },
  { name: 'C#', icon: MdCode, level: 85 },
  { name: 'JavaScript', icon: MdOutlineJavascript, level: 80 },
  { name: 'Node.js', icon: MdBuild, level: 75 },
  { name: 'MySQL', icon: MdStorage, level: 80 },
  { name: 'MongoDB', icon: MdOutlineLeaderboard, level: 75 },
  { name: 'HTML/CSS', icon: MdHtml, level: 85 },
  { name: 'Git/GitHub', icon: MdCloud, level: 90 },
  { name: 'VS Code', icon: MdTerminal, level: 95 },
  { name: 'Android Studio', icon: MdAndroid, level: 90 },
  { name: 'Mac/Linux', icon: MdLaptopMac, level: 85 },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        bgcolor: 'background.default',
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
            Skills
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box
                      component={skill.icon}
                      sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        mb: 1,
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: 4,
                        bgcolor: 'background.default',
                        borderRadius: 2,
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        style={{
                          height: '100%',
                          backgroundColor: '#64ffda',
                        }}
                      />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
