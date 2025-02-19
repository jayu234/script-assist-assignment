import { ActionIcon, Group } from '@mantine/core';
import { TbArrowLeft } from "react-icons/tb";

export const ResourceHeader = ({ onBack }: { onBack: () => void }) => (
  <Group position="apart" mb="xl">
    <ActionIcon 
      onClick={onBack}
      size="xl"
      variant="gradient"
      gradient={{ from: 'yellow', to: 'orange' }}
    >
      <TbArrowLeft size={24} />
    </ActionIcon>
  </Group>
);