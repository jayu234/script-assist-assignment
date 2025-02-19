import { FC, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Card, Alert, Title } from '@mantine/core';
import { TbAlertCircle, TbPlanet, TbMovie, TbUsers  } from 'react-icons/tb';
import { fetchResource } from '../../../services/swapi';
import { ResourceHeader } from './ResourceHeader';
import { CustomAccordion } from './CustomAccordion';
import { ResourceSkeleton } from './ResourceSkeleton';
import { ResourceAttributes } from './ResourceAttributes';
import { ResourceType } from '../../../types/resource';
import { useResourceDetailStyles } from './styles';

const ResourceDetail: FC = () => {
  const { classes } = useResourceDetailStyles();
  const navigate = useNavigate();
  const { resourceType, id } = useParams<{ resourceType: ResourceType; id: string }>();
  const [openedAccordion, setOpenedAccordion] = useState<string | null>(null);

  const { data: resource, isLoading, isError } = useQuery({
    queryKey: ['resource', resourceType, id],
    queryFn: () => fetchResource(resourceType!, id!),
    enabled: !!resourceType && !!id,
  });

  if (isError) {
    return (
      <Container className={classes.wrapper}>
        <Alert icon={<TbAlertCircle size="1rem" />} title="Error!" color="red">
          Failed to load resource data. Please try again later.
        </Alert>
      </Container>
    );
  }

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <ResourceHeader onBack={() => navigate(-1)} />

        {isLoading ? (
          <ResourceSkeleton />
        ) : resource && (
          <Card className={classes.card}>
            <Title className={classes.title} mb="xl">
              {resource.name || resource.title}
            </Title>

            <ResourceAttributes resource={resource} />
            
            {resourceType && (
              <CustomAccordion
                config={ENRICHMENT_CONFIG[resourceType]}
                resource={resource}
                openedAccordion={openedAccordion}
                onAccordionChange={setOpenedAccordion}
              />
            )}
          </Card>
        )}
      </Container>
    </div>
  );
};

export default ResourceDetail;

const ENRICHMENT_CONFIG = {
  people: [
    { 
      field: 'homeworld', 
      label: 'Know About Homeworld',
      icon: <TbPlanet size={18} />,
      type: 'planets'
    },
    {
      field: 'films',
      label: 'Appeared In Films',
      icon: <TbMovie size={18} />,
      type: 'films'
    }
  ],
  planets: [
    {
      field: 'residents',
      label: 'Notable Residents',
      icon: <TbUsers size={18} />,
      type: 'people'
    },
    {
      field: 'films',
      label: 'Featured In Films',
      icon: <TbMovie size={18} />,
      type: 'films'
    }
  ],
  starships: [
    {
      field: 'pilots',
      label: 'Known Pilots',
      icon: <TbUsers size={18} />,
      type: 'people'
    },
    {
      field: 'films',
      label: 'Appeared In Films',
      icon: <TbMovie size={18} />,
      type: 'films'
    }
  ],
  vehicles: [
    {
      field: 'pilots',
      label: 'Known Pilots',
      icon: <TbUsers size={18} />,
      type: 'people'
    },
    {
      field: 'films',
      label: 'Featured In Films',
      icon: <TbMovie size={18} />,
      type: 'films'
    }
  ],
  species: [
    {
      field: 'people',
      label: 'Known Members',
      icon: <TbUsers size={18} />,
      type: 'people'
    },
    {
      field: 'homeworld',
      label: 'Home Planet',
      icon: <TbPlanet size={18} />,
      type: 'planets'
    }
  ],
}