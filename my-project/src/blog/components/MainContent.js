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

const cardData = [
  // Card data array remains unchanged
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
              I'm a passionate software engineering student in Gothenburg, Sweden. I enjoy utilizing my skills to create impactful solutions in web/app development, embedded systems, distributed systems, and AI-driven applications. I love the intersection of AI and software engineering, particularly how machine learning can enhance user experience, optimize development processes, and drive innovation. Currently, I'm focusing on integrating AI technologies into real-world projects to make everyday life more efficient and insightful.
            </Typography>
            <Typography paragraph>
              Outside of coding, I'm a strong advocate for teamwork and leadership, with experience in project management through initiatives like the Amnesty International Club and management courses within the university. I'm excited about solving complex challenges and pushing the boundaries of what's possible, both in technology and beyond.
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
