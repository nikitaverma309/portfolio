import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nikita305verma@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Nikitaverma309' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/nikita-verma-3h13097' },
  ];

  // Custom styling for TextFields
  const textFieldSx = {
    mb: 3,
    '& .MuiOutlinedInput-root': {
      color: '#ccd6f6',
      bgcolor: 'rgba(10, 25, 47, 0.5)',
      transition: 'all 0.3s ease',
      borderRadius: 1,
      '& fieldset': {
        borderColor: 'rgba(100, 255, 218, 0.2)',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(100, 255, 218, 0.5)',
        boxShadow: 'inset 0 0 5px rgba(100, 255, 218, 0.1)'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#64ffda',
        borderWidth: '2px',
        boxShadow: '0 0 10px rgba(100, 255, 218, 0.2)'
      },
    },
    '& .MuiInputLabel-root': {
      color: '#8892b0',
      '&.Mui-focused': {
        color: '#64ffda',
      },
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        bgcolor: '#0A192F', // Deep navy background alternating with Projects (#112240)
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
              },
            }}
          >
            Get In Touch
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 3, color: '#ccd6f6', fontWeight: 'bold' }}
                >
                  Let's Connect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 5, color: '#8892b0', lineHeight: 1.8, fontSize: '1.05rem' }}
                >
                  I’m open to mobile app, Flutter, React, and government or enterprise product opportunities. If you want to discuss a project, collaboration, or job role, send me a message here or connect over email.
                </Typography>
                
                <Stack spacing={3} sx={{ mb: 5 }}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2.5, 
                      bgcolor: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      borderRadius: 3, 
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        borderColor: 'rgba(100, 255, 218, 0.4)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                      }
                    }}
                  >
                    <Button 
                      startIcon={<EmailIcon />} 
                      href="mailto:nikita305verma@gmail.com" 
                      sx={{ 
                        color: 'primary.main', 
                        fontSize: '1rem',
                        textTransform: 'none',
                        fontWeight: 'bold'
                      }}
                    >
                      nikita305verma@gmail.com
                    </Button>
                  </Paper>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2.5, 
                      bgcolor: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      borderRadius: 3, 
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        borderColor: 'rgba(100, 255, 218, 0.4)',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                      }
                    }}
                  >
                    <Button 
                      href="https://linkedin.com/in/nikita-verma-3h13097" 
                      target="_blank" 
                      startIcon={<FaLinkedin />}
                      sx={{ 
                        color: '#ccd6f6', 
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      linkedin.com/in/nikita-verma-3h13097
                    </Button>
                  </Paper>
                </Stack>
                
                <Box sx={{ display: 'flex', gap: 3 }}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      sx={{
                        color: 'primary.main',
                        border: '1px solid rgba(100, 255, 218, 0.3)',
                        p: 1.5,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(100, 255, 218, 0.1)',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 5px 15px rgba(100, 255, 218, 0.4)',
                          borderColor: '#64ffda'
                        },
                      }}
                    >
                      <social.icon size={22} />
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    bgcolor: 'rgba(17, 34, 64, 0.7)',
                    backdropFilter: 'blur(10px)',
                    p: 5,
                    borderRadius: 4,
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 20px 40px -15px rgba(100, 255, 218, 0.15)',
                    }
                  }}
                >
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={textFieldSx}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={textFieldSx}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      py: 2,
                      mt: 2,
                      color: 'primary.main',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      bgcolor: 'transparent',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      letterSpacing: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(100, 255, 218, 0.1)',
                        boxShadow: '0 0 15px rgba(100, 255, 218, 0.4)',
                        transform: 'translateY(-3px)'
                      },
                      '&:active': {
                        transform: 'scale(0.98)'
                      }
                    }}
                  >
                    Say Hello
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;