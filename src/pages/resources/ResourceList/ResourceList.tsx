import { FC, useState, useMemo } from 'react';
import { Container, Title, TextInput, SegmentedControl, LoadingOverlay, Box, Text, Center, Pagination } from '@mantine/core';
import { ResourceType, SortState } from '../../../types/resource';
import { useResources } from '../../../hooks/useResources';
import ResourceTable from './ResourceTable';
import { useResourceListStyles } from './styles';

type ResourceTypeConfig = {
  value: ResourceType;
  label: string;
};

const resourceTypes: ResourceTypeConfig[] = [
  { value: 'people', label: 'Characters' },
  { value: 'planets', label: 'Planets' },
  { value: 'starships', label: 'Starships' },
  { value: 'vehicles', label: 'Vehicles' },
  { value: 'species', label: 'Species' },
];

const Resources: FC = () => {
  const { classes } = useResourceListStyles();
  const [selectedResource, setSelectedResource] = useState<ResourceType>('people');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortState, setSortState] = useState<SortState>({ column: 'name', direction: 'asc' });

  const { data, isError, isLoading } = useResources(selectedResource, searchQuery, currentPage);

  const sortedData = useMemo(() => {
    if (!data?.results) return [];
    return [...data.results].sort((a, b) => {
      const aValue = a[sortState.column];
      const bValue = b[sortState.column];
      const modifier = sortState.direction === 'asc' ? 1 : -1;

      if (!isNaN(aValue)) {
        return (parseFloat(aValue) - parseFloat(bValue)) * modifier;
      }
      return aValue.localeCompare(bValue) * modifier;
    });
  }, [data?.results, sortState]);

  const handleResourceChange = (value: ResourceType) => {
    setSelectedResource(value);
    setCurrentPage(1);
  };

  return (
    <div className={classes.wrapper}>
      <Container size="xl">
        <div className={classes.header}>
          <Title className={classes.title}>Star Wars Database</Title>
          <TextInput
            className={classes.searchInput}
            placeholder={`Search ${selectedResource}...`}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <SegmentedControl
          className={classes.resourceSelector}
          value={selectedResource}
          onChange={handleResourceChange}
          data={resourceTypes}
        />

        <div className={classes.tableContainer}>
          <LoadingOverlay
            visible={isLoading}
            className={classes.loadingOverlay}
            loaderProps={{ variant: 'dots' }}
          />

          {isError ? (
            <Text color="red" className={classes.errorText}>Error fetching data</Text>
          ) : data?.results?.length === 0 ? (
            <Text className={classes.noResults}>No results found</Text>
          ) : (
            <Box className={classes.tableWrapper}>
              <ResourceTable
                resourceType={selectedResource}
                data={sortedData}
                sortState={sortState}
                onSort={(column) => setSortState((prevState) => ({
                  column,
                  direction: prevState.column === column && prevState.direction === 'asc' ? 'desc' : 'asc'
                }))}
              />
            </Box>
          )}
        </div>

        {data?.count && data.count > 10 && (
          <ResourcePagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.count / 10)}
            onChange={setCurrentPage}
          />
        )}
      </Container>
    </div>
  );
};

export default Resources;

function ResourcePagination({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  const { classes } = useResourceListStyles();

  return (
    <Center className={classes.pagination}>
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={onChange}
        siblings={1}
        boundaries={1}
      />
    </Center>
  );
};