import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Define a mapping from category tags to specific chip styles
const chipStyles = {
  'Programming Languages': {
    backgroundColor: (theme) => theme.palette.primary.light,
    color: (theme) => theme.palette.primary.contrastText,
    fontWeight: 'bold !important',
    border: '1px solid #004d40 !important',
  },
  Frameworks: {
    backgroundColor: '#FF8A65', // Deep Orange
    color: '#fff',
  },
  Libraries: {
    backgroundColor: '#4DB6AC', // Teal
    color: '#fff',
  },
  Databases: {
    backgroundColor: '#BA68C8', // Purple
    color: '#fff',
  },
  'Tools & Platforms': {
    backgroundColor: '#9575CD', // Deep Purple
    color: '#fff',
  },
  DevOps: {
    backgroundColor: '#81C784', // Green
    color: '#fff',
  },
  // Add more categories and styles as needed
};

const techStackInfo = [
  {
    tag: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++', 'C', 'HTML', 'CSS'],
  },
  {
    tag: 'Frameworks',
    items: ['React', 'Vue.js', 'Node.js', 'ExpressJS', 'Django'],
  },
  {
    tag: 'Libraries',
    items: ['React', 'Vue.js', 'Node.js', 'Express', 'Spring Boot', 'Flask'],
  },
  {
    tag: 'Databases',
    items: ['MongoDB', 'SQLite', 'PostgreSQL'],
  },
  {
    tag: 'Tools & Platforms',
    items: ['Git', 'Docker', 'AWS', 'Heroku', 'Jenkins', 'Postman'],
  },
  {
    tag: 'DevOps',
    items: ['Docker', 'Kubernetes'],
  },
  // Add more categories and items as needed
];

export default function TechStack() {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0',
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'left', paddingLeft: '16px' }}>
        Tech Stack
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          margin: 0,
          width: 'calc(100% - 18px)',
        }}
      >
        {techStackInfo.map((category, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                border: (theme) => `1px solid ${theme.palette.divider}`, // Light border
                borderRadius: '8px',
                boxShadow: 1, // Slight elevation
                overflow: 'hidden',
                height: '100%',
                padding: 2, // Add padding inside the box
              }}
            >
              {/* Category Title */}
              <Typography gutterBottom variant="h6" component="div">
                {category.tag}
              </Typography>

              {/* Tech Items */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.items.map((item, idx) => (
                  <Chip
                    key={idx}
                    label={item}
                    sx={{
                      ...(chipStyles[category.tag] || {
                        backgroundColor: (theme) => theme.palette.primary.light,
                        color: (theme) => theme.palette.primary.contrastText,
                      }),
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
