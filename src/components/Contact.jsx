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

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ mb: 3, color: 'text.primary' }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: 'text.secondary' }}
              >
                I’m open to mobile app, Flutter, React, and government or enterprise product opportunities. If you want to discuss a project, collaboration, or job role, send me a message here or connect over email.
              </Typography>
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
                  <Button startIcon={<EmailIcon />} href="mailto:nikita305verma@gmail.com" sx={{ color: 'primary.main' }}>
                    nikita305verma@gmail.com
                  </Button>
                </Paper>
                <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
                  <Button href="https://linkedin.com/in/nikita-verma-3h13097" target="_blank" sx={{ color: 'primary.main', textTransform: 'none' }}>
                    LinkedIn: linkedin.com/in/nikita-verma-3h13097
                  </Button>
                </Paper>
              </Stack>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'rgba(100, 255, 218, 0.1)',
                      },
                    }}
                  >
                    <social.icon size={24} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  bgcolor: 'background.paper',
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'background.default',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;