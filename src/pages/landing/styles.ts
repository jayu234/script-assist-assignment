import { createStyles } from '@mantine/core';

export const useLandingStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0a0c1f',
    overflow: 'hidden',
  },
  inner: {
    position: 'relative',
    zIndex: 1,
    animation: 'fadeIn 1s ease-out forwards',
  },
  title: {
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '-0.05em',
    color: theme.white,
  },
  description: {
    color: theme.colors.gray[4],
    maxWidth: '600px',
    margin: '2rem 0',
    opacity: 0,
    animation: 'fadeIn 1s ease-out 0.5s forwards',
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.1em',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 15px rgba(255, 213, 0, 0.3)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  stars: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  star: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    animation: 'twinkle 2s infinite',
  },
  '@global': {
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes twinkle': {
      '0%': { opacity: 0.2 },
      '50%': { opacity: 1 },
      '100%': { opacity: 0.2 },
    },
  },
}));