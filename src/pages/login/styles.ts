import { createStyles } from '@mantine/core';

export const useLoginStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#0a0c1f',
    display: 'flex',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.yellow[5],
    textAlign: 'center',
    marginBottom: Number(theme.spacing.xl) * 2,
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
}));