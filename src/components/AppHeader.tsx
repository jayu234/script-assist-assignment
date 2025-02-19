import { Group, Title, useMantineTheme } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { LogoutButton } from './LogoutButton';
import { useAuth } from '../contexts/AuthContext';

const useStyles = createStyles((theme) => ({
  header: {
    padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
    backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.97),
    borderBottom: `1px solid ${theme.fn.rgba(theme.colors.yellow[5], 0.2)}`,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  title: {
    color: theme.colors.yellow[5],
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
}));

export const AppHeader = () => {
  const { classes } = useStyles();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <Group className={classes.header} position="apart">
      <Title order={3} className={classes.title}>
        Star Wars DB
      </Title>
      <LogoutButton />
    </Group>
  );
};