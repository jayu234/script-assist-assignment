import { Button } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { TbLogout } from 'react-icons/tb';
import { useAuth } from '../contexts/AuthContext';

const useStyles = createStyles((theme) => ({
  button: {
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      backgroundColor: theme.fn.rgba(theme.colors.red[7], 0.2),
    },
  },
}));

export const LogoutButton = () => {
  const { classes } = useStyles();
  const { logout } = useAuth();

  return (
    <Button
      variant="subtle"
      color="red"
      onClick={logout}
      leftIcon={<TbLogout size={18} />}
      className={classes.button}
    >
      Logout
    </Button>
  );
};