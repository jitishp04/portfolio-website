import * as React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Element } from 'react-scroll'; // Import Element for scrolling


const articleInfo = [
  {
    tag: 'AI and Machine Learning Systems Development',
    title: 'CyberSafeAI',
    description:
      'CyberSafeAI is a web application designed to combat the rising cyber crime linked to social media use by identifying and flagging toxic text. Users can upload messages, tweets, or other text for toxicity analysis, with the system categorizing and assigning percentages to labels such as toxic, severe_toxic, obscene, threat, insult, and identity_hate. By highlighting problematic content, CyberSafeAI provides explainable AI solutions, helping individuals, content creators, and social media managers analyze and refine their text before posting, ultimately fostering a safer and healthier online environment.',
    image: '/cyberSafeAi.png',
    tech: ['Django', 'Pytest', 'BERT LLM', 'SQLite', 'Docker', 'Kubernetes', 'GCP', 'Gitlab CI/CD'], 
    languages: ['Python', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/jitishp04/CyberSafeAI',
  },
  {
    tag: 'Microservices Based Distributed Systems Development',
    title: 'Dentigo',
    description:
      'This project focuses on creating a distributed system to simplify the process of booking dentist appointments in Gothenburg, with plans to expand across Sweden. The system provides a web-based graphical user interface (GUI) that allows users to search for available appointment slots within specified time windows, view them on an interactive map, and book or cancel appointments. Users are notified about booking updates in real time, ensuring a seamless experience.',
    image: '/dentigo1.png',
    tech: ['Vue', 'MQTT', 'Node.js', 'Docker', 'PostgreSQL', 'Gitlab CI/CD', 'Tailwind CSS', 'DaisyUI'],
    languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/jitishp04/DENTIGO',
  },
  {
    tag: 'Web-development',
    title: 'Travel Buddy',
    description:
      'A full-stack travel web-app, which allows you to search places to visit in the area using Google Maps API, create journals, and checklists.',
    image: '/travel-buddy.png',
    tech: ['ExpressJS', 'Node.js', 'MongoDB', 'Postman', 'Vue.js'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/jitishp04/Travel-Buddy',
  },
  {
    tag: 'Arduino and Android - Distributed Systems Development',
    title: 'Home4U',
    description:
      'HOME4U is a smart home system that provides users with the experience of monitoring home security from a distance and enjoying smart control of their home through devices. This involves: Set security mode from Wio terminal and app, turn off alarm through app and Wio terminal, interact (play, pause, skip) songs via app and Wio terminal, and create scenes (though unable to execute, open to development).',
    image: '/WioTerminalSetupImage.jpg',
    tech: ['Figma', 'Arduino', 'MQTT', 'Node.js', 'Docker', 'Gradle', 'Android Studio', 'SQLite'],
    languages: ['JavaScript', 'Java', 'C++'],
    link: 'https://github.com/jitishp04/Home4U',
  },
  {
    tag: 'Miniature car data extraction - Cyber-physical Systems',
    title: 'Steering Wheel Algorithm',
    description:
      'Engineering a real-time algorithm for adjusting car steering based on image recognition, sensor data, and angular velocity, integrating OpenDLV for data extraction and processing.',
    image: '/car.png',
    tech: ['CMake', 'Docker', 'OpenDLV'],
    languages: ['C++'],
    link: 'https://github.com/jitishp04/steering-wheel-algorithm',
  },
  {
    tag: 'Java and JavaFx project',
    title: 'Snake Game',
    description:
      'Snake game with a GUI, music, leaderboard features, made for proffesionals to beginners to be able to toggle speed of the snake. ',
    image: '/snake1.png',
    tech: ['JavaFx', 'Maven'],
    languages: ['Java', 'CSS'],
    link: 'https://github.com/jitishp04/SnakeGame',
  },
  {
    tag: 'Other Coding Works',
    image: '/random.png',
    items: [
      {
        title: 'Portfolio Website',
        link: 'https://github.com/jitishp04/portfolio-website',
      },
      {
        title: 'AI-systems Labs',
        link: 'https://github.com/jitishp04/Software-Engineering-for-AI-Systems',
      },
      {
        title: 'Arduino and C labs/ mini-projects',
        link: 'https://github.com/jitishp04/Embedded-Systems-Arduino-C-',
      },
   ],
  },
  {
    tag: 'Research Papers',
    image: '/reports.png',
    items: [
      {
        title: 'Change Management',
        link: 'https://github.com/jitishp04/Research-Papers/blob/main/ChangeManagement.pdf',
      },
      {
        title: 'Software Development Methodologies',
        link: 'https://github.com/jitishp04/Research-Papers/blob/main/SoftwareDevelopmentMethodologies.pdf',
      }
   ],
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
  display: 'flex', // Added to enable flex positioning
  alignItems: 'center', // Center vertically
  '&:hover': {
    cursor: 'pointer',
  },
  '& .arrow': {
    visibility: 'hidden',
    marginLeft: 'auto', // Push arrow to the right
    transition: 'visibility 0.2s, opacity 0.2s',
    opacity: 0,
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 1,
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
    backgroundColor: theme.palette.text.primary,
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
            backgroundColor: (theme) => theme.palette.primary.light,
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
    <Element id="projects" name="projects"> {/* Wrap with Element */}
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
                  border: '1px solid theme.palette.divider', // Light border
                  borderRadius: '8px',
                  boxShadow: 1, // Slight elevation
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                {/* Image */}
                {article.image && (
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title || article.tag}
                    sx={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                    }}
                  />
                )}

                {/* Content */}
                <Box sx={{ padding: 2, flexGrow: 1 }}>
                  <Typography gutterBottom variant="caption" component="div">
                    {article.tag}
                  </Typography>

                  {/* Title and Description or Items */}
                  {article.items ? (
                    // For articles with multiple items
                    article.items.map((item, idx) => (
                      <TitleTypography
                        key={idx}
                        variant="h6"
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: 'none',
                          color: 'inherit',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 1,
                          '&:hover': {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.title}
                        <NavigateNextRoundedIcon
                          className="arrow"
                          sx={{ fontSize: '1rem', marginLeft: 'auto' }}
                        />
                      </TitleTypography>
                    ))
                  ) : (
                    // For regular articles
                    <>
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
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                      >
                        {article.title}
                        <NavigateNextRoundedIcon
                          className="arrow"
                          sx={{ fontSize: '1rem', marginLeft: 'auto' }}
                        />
                      </TitleTypography>
                      <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                        {article.description}
                      </StyledTypography>
                      <TechChips tech={article.tech} />
                      <LanguageChips languages={article.languages} />
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Element>
  );
}