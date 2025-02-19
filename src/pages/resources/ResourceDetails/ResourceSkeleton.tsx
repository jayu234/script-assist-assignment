import { Card, Grid, Skeleton, Stack } from '@mantine/core';
import { useResourceDetailStyles } from './styles';

export const ResourceSkeleton = () => {
  const { classes } = useResourceDetailStyles();
  
  return (
    <Card className={classes.card}>
      <Skeleton height={40} mb="xl" width="60%" />
      <Grid>
        {Array(6).fill(0).map((_, i) => (
          <Grid.Col span={4} key={i}>
            <Stack spacing={4}>
              <Skeleton height={20} width="40%" />
              <Skeleton height={28} width="80%" />
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
};