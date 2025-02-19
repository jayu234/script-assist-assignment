import { Accordion, Group, Text } from '@mantine/core';
import { AccordionContent } from './AccordionContent';
import { EnrichmentConfig } from '../../../types/resource';

type Props = {
  config: readonly EnrichmentConfig[];
  resource: any;
  openedAccordion: string | null;
  onAccordionChange: (value: string | null) => void;
};

export const CustomAccordion = ({ 
  config, 
  resource, 
  openedAccordion, 
  onAccordionChange 
}: Props) => (
  <Accordion
    value={openedAccordion}
    onChange={onAccordionChange}
    chevronPosition="left"
    mt="xl"
  >
    {config.map(({ field, label, icon, type }) => {
      const urls = resource?.[field];
      if (!urls || (Array.isArray(urls) && urls.length === 0)) return null;

      return (
        <Accordion.Item key={field} value={field}>
          <Accordion.Control>
            <Group spacing="xs">
              {icon}
              <Text>{label}</Text>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <AccordionContent urls={urls} type={type} />
          </Accordion.Panel>
        </Accordion.Item>
      );
    })}
  </Accordion>
);