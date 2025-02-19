import { FC } from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useLandingStyles } from './styles';

const Landing: FC = () => {
  const { classes } = useLandingStyles();
  const navigate = useNavigate();

  const stars = Array.from({ length: 150 }).map((_, index) => (
    <div
      key={index}
      className={classes.star}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.stars}>{stars}</div>
      <Container size="lg" className={classes.inner}>
        <Title order={1} className={classes.title}>
          Explore the{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: '#FFD700', to: '#FF4500' }}
            inherit
          >
            Star Wars
          </Text>{' '}
          Universe
        </Title>

        <Text className={classes.description}>
          Access comprehensive data about characters, planets, starships, and more from the iconic
          Star Wars universe through our powerful API interface.
        </Text>

        <Button
          size="xl"
          className={classes.button}
          variant="gradient"
          gradient={{ from: '#FFD700', to: '#FF4500' }}
          onClick={() => navigate('/resources')}
        >
          Explore Resources
        </Button>
      </Container>
    </div>
  );
};

export default Landing;