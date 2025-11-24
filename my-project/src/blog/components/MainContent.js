import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Element } from 'react-scroll'; // Import Element for scrolling


const cardData = [
];
function Author({ authors }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function MainContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* About Me Section */}
      <Element id="about-me" name="about-me"> {/* Wrap with Element */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: (theme) => `1px solid ${theme.palette.divider}`, // Light border
            borderRadius: '8px',
            boxShadow: 1, // Slight elevation
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography gutterBottom variant="caption" component="div">
              About Me
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
              Hi There, I'm Jitish Rajankumar Padhya
            </Typography>
            <Typography variant="body1" color="text.primary">
              <Typography paragraph>
                Currently pursuing a Master’s in Data Science, Statistics, and Decision Analysis at Stockholm University, with a focus on statistical modeling, machine learning, and decision analysis. This academic journey builds on a Bachelor’s degree in Software Engineering and Management from the University of Gothenburg, where a strong foundation in software architectures, project management and risk analysis, web development, and data management was developed.
              </Typography>
              <Typography paragraph>
                Recently contributed to advancing AI-driven solutions in requirements engineering during internships at Ericsson and developed Agentic AI for medical data extraction at BosLeo. Proficient in R, SQL, and requirements engineering, with certifications in Python for Data Science and Palantir’s Foundry & AIP Builder. Enthusiastic about leveraging technical expertise to drive impactful, innovative solutions at the intersection of software engineering and data science.
              </Typography>
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="body1" color="text.primary">
                Connect with me:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <IconButton
                  component="a"
                  href="https://github.com/jitishp04"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/jitish-rajankumar-padhya/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Element>

      {/* The rest of your content remains the same */}
      <Grid container spacing={2} columns={12}>
        {cardData.map((card, index) => (
          <Grid key={index} xs={12} md={6}>
            {/* ... your card content */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}