import * as React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const articleInfo = [
  {
    tag: 'Web-development',
    title: 'Travel Buddy',
    description:
      'A full-stack travel web-app, which allows you to search places to visit in the area, create journals, and checklists.',
    image: '/travel-buddy.png',
    tech: ['ExpressJS', 'Node.js', 'MongoDB', 'Postman', 'Vue.js'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/jitishp04/Travel-Buddy',
  },
  {
    tag: 'Product',
    title: 'Driving growth with user-centric product design',
    description:
      'Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.',
    image: '/travel-buddy.png',
    tech: ['Figma', 'Adobe XD', 'React'],
    languages: ['JavaScript', 'TypeScript'],
    link: 'https://example.com/product-design',
  },
  {
    tag: 'Design',
    title: 'Embracing minimalism in modern design',
    description:
      'Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences.',
    image: '/travel-buddy.png',
    tech: ['Photoshop', 'Illustrator', 'CSS'],
    languages: ['CSS', 'SCSS'],
    link: 'https://example.com/minimal-design',
  },
];

const StyledTypography = styled(Typography)({
  display: 'block',
  overflow: 'visible',
  whiteSpace: 'normal',
  textOverflow: 'clip',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

function TechChips({ tech }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
      {tech.map((item, index) => (
        <Chip
          key={index}
          label={item}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.light,
            color: (theme) => theme.palette.primary.contrastText,
          }}
        />
      ))}
    </Box>
  );
}

TechChips.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function LanguageChips({ languages }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
      {languages.map((item, index) => (
        <Chip
          key={index}
          label={item}
          sx={{
            backgroundColor:  (theme) => theme.palette.primary.light,
            color: (theme) => theme.palette.primary.contrastText,
            fontWeight: 'bold !important',
            border: '1px solid #004d40 !important', 
          }}
        />
      ))}
    </Box>
  );
}

LanguageChips.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Latest() {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0',
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'left', paddingLeft: '16px' }}>
        Projects
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          margin: 0,
          width: 'calc(100% - 18px)',
        }}
      >
        {articleInfo.map((article, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
                padding: 0,
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0 0',
                  marginBottom: '8px',
                }}
              />
              <Typography gutterBottom variant="caption" component="div">
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant="h6"
                component="a"
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {article.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: '1rem' }}
                />
              </TitleTypography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.description}
              </StyledTypography>
              <TechChips tech={article.tech} />
              <LanguageChips languages={article.languages} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
