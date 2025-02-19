import { Grid, Text } from '@mantine/core';
import { Resource } from '../../../types/resource';
import { useResourceDetailStyles } from './styles';

type Props = {
  resource: Resource;
};

export const ResourceAttributes = ({ resource }: Props) => {
  const { classes } = useResourceDetailStyles();

  return (
    <Grid gutter="xl">
      {Object.entries(resource).map(([key, value]) => {
        if (typeof value !== 'string' || 
            key === 'url' || 
            key === 'created' || 
            key === 'edited' ||
            key === 'homeworld'
          ) return null;

        return (
          <Grid.Col span={4} key={key}>
            <div className={classes.attribute}>
              <Text className={classes.detailLabel}>
                {key.replace(/_/g, ' ').toUpperCase()}
              </Text>
              <Text className={classes.detailValue}>
                {value}
              </Text>
            </div>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};