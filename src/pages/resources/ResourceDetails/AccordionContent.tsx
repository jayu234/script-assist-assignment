import { Card, Group, Text, Badge, ThemeIcon, Loader, Center, Grid } from '@mantine/core';
import { TbMovie, TbPlanet, TbUsers, TbRocket } from 'react-icons/tb';
import { useEnrichedData } from '../../../hooks/useEnrichedData';

type Props = {
  urls: string | string[];
  type: string;
};

export const AccordionContent = ({ urls, type }: Props) => {
  const { data, isLoading } = useEnrichedData(urls, true);

  if (isLoading) {
    return (
      <Center p="xl">
        <Loader variant="oval" color="yellow" />
      </Center>
    );
  }

  const getIcon = () => {
    switch(type) {
      case 'films': return <TbMovie size={16} />;
      case 'planets': return <TbPlanet size={16} />;
      case 'starships':
      case 'vehicles': return <TbRocket size={16} />;
      default: return <TbUsers size={16} />;
    }
  };

  const renderContent = (item: any) => {
    switch(type) {
      case 'films':
        return (
          <>
            <Text size="sm">
              <Badge color="yellow" mr="sm">Director</Badge>
              {item.director}
              <Badge color="orange" mx="sm">Release Date</Badge>
              {item.release_date}
            </Text>
            <Text size="sm" mt="xs">
              <Badge color="grape">Opening Crawl</Badge> 
              {item.opening_crawl.substring(0, 80)}...
            </Text>
          </>
        );
        
      case 'planets':
        return (
          <Group spacing="xl">
            <Text size="sm">
              <Badge color="yellow">Climate</Badge> {item.climate}
            </Text>
            <Text size="sm">
              <Badge color="yellow">Population</Badge> {item.population}
            </Text>
            <Text size="sm">
              <Badge color="yellow">Terrain</Badge> {item.terrain}
            </Text>
          </Group>
        );

      default:
        return (
          <Group spacing="xs">
            <Text size="sm">{item.name || item.title}</Text>
            {item.birth_year && (
              <Badge color="yellow">{item.birth_year}</Badge>
            )}
          </Group>
        );
    }
  };

  return (
    <Grid>
      {data?.map((item: any, index: any) => (
        <Grid.Col key={index} span={type === 'films' ? 12 : 6}>
          <Card p="md" withBorder>
            <Group spacing="sm" mb="xs">
              <ThemeIcon variant="gradient" gradient={{ from: 'yellow', to: 'orange' }} size="lg">
                {getIcon()}
              </ThemeIcon>
              {renderContent(item)}
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};