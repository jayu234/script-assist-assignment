import { useForm } from '@mantine/form';
import { Button, Container, TextInput, Title, Text } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLoginStyles } from './styles';

export default function Login () {
  const { classes } = useLoginStyles();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/resources';

  const form = useForm({
    initialValues: { username: '', password: '' },
    validate: {
      username: (value) => (value.length < 3 ? 'Username must be at least 3 characters' : null),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await login(values.username, values.password);
      navigate(from, { replace: true });
    } catch (error) {
      form.setErrors({ password: 'Invalid credentials' });
    }
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.loginForm} size="xs">
        <Title className={classes.title} order={1}>
          Welcome to Star Wars DB
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            {...form.getInputProps('username')}
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            mt="md"
            {...form.getInputProps('password')}
          />

          <Button type="submit" fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>

        <Text color="dimmed" size="sm" align="center" mt="xl">
          Demo credentials: admin / password
        </Text>
      </Container>
    </div>
  );
};