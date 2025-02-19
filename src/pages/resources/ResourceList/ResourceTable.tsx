import { Badge, Group, Table, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { TbArrowsSort, TbSortAscending, TbSortDescending } from 'react-icons/tb';
import { ResourceType, SortState } from '../../../types/resource';
import { useResourceListStyles } from './styles';

type ResourceTableProps = {
  resourceType: ResourceType;
  data: any[];
  onSort: (column: string) => void;
  sortState: { column: string; direction: 'asc' | 'desc' };
};

export default function ResourceTable({
  resourceType,
  data,
  onSort,
  sortState,
}: ResourceTableProps) {
  const { classes } = useResourceListStyles();

  return (
    <Table className={classes.table}>
      <ResourceTableHeader
        resourceType={resourceType}
        sortState={sortState}
        onSort={onSort}
      />
      <tbody>
        {data.map((item) => (
          <ResourceTableRow
            key={item.url}
            item={item}
            resourceType={resourceType}
          />
        ))}
      </tbody>
    </Table>
  );
};

const columns: Record<ResourceType, string[]> = {
  people: ['name', 'height', 'mass', 'hair_color'],
  planets: ['name', 'climate', 'terrain', 'population'],
  starships: ['name', 'model', 'manufacturer', 'crew'],
  vehicles: ['name', 'model', 'manufacturer', 'crew'],
  species: ['name', 'classification', 'designation', 'average_height'],
};

function ResourceTableHeader({
  resourceType,
  sortState,
  onSort,
}: {
  resourceType: ResourceType;
  sortState: SortState;
  onSort: (column: string) => void;
}){
  const { classes } = useResourceListStyles();

  return (
    <thead>
      <tr>
        {columns[resourceType].map((column) => (
          <th
            key={column}
            onClick={() => onSort(column)}
            className={classes.headerCell}
          >
            <Group spacing="xs">
              <Text className={classes.headerText}>
                {column.replace(/_/g, ' ')}
              </Text>
              {sortState.column === column ? (
                sortState.direction === 'asc' ? (
                  <TbSortAscending size={16} />
                ) : (
                  <TbSortDescending size={16} />
                )
              ) : (
                <TbArrowsSort size={16} />
              )}
            </Group>
          </th>
        ))}
      </tr>
    </thead>
  );
};

function ResourceTableRow({ item, resourceType }: {
  item: any;
  resourceType: ResourceType;
}) {
  const { classes } = useResourceListStyles();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const id = item.url.split('/').slice(-2)[0];
    navigate(`/${resourceType}/${id}`);
  };

  return (
    <tr className={classes.row} onClick={handleNavigate}>
      {columns[resourceType].map((column) => (
        <td key={column} className={classes.cell}>
          {Array.isArray(item[column]) ? (
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'yellow' }}>
              {item[column].length}
            </Badge>
          ) : (
            <Text className={classes.cellText}>{item[column]}</Text>
          )}
        </td>
      ))}
    </tr>
  );
};