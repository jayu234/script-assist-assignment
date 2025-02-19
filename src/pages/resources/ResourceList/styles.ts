import { createStyles } from '@mantine/core';

export const useResourceListStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    padding: '2rem 0',
    backgroundColor: '#0a0c1f',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '0.5rem',
    animation: 'fadeIn 0.8s ease-out',
  },

  title: {
    color: theme.colors.yellow[5],
    fontWeight: 900,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: Number(theme.fontSizes.xl) * 1.5,

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl,
    },
  },

  tableContainer: {
    position: 'relative',
    marginTop: theme.spacing.xl,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },

  loadingOverlay: {
    backdropFilter: 'blur(2px)',
    backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.8),
  },

  errorText: {
    color: theme.colors.red[5],
    textAlign: 'center',
    padding: theme.spacing.xl,
    fontSize: theme.fontSizes.lg,
    border: `1px solid ${theme.colors.red[5]}`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.fn.rgba(theme.colors.red[9], 0.2),
  },

  noResults: {
    color: theme.colors.gray[5],
    textAlign: 'center',
    padding: theme.spacing.xl,
    fontSize: theme.fontSizes.lg,
    border: `1px solid ${theme.colors.gray[7]}`,
    borderRadius: theme.radius.md,
    backgroundColor: theme.fn.rgba(theme.colors.gray[9], 0.2),
  },

  searchInput: {
    flex: '1 1 300px',
    maxWidth: '400px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    borderRadius: theme.radius.xl,
    '&:focus-within': {
      boxShadow: `0px 0px 15px ${theme.colors.yellow[5]}`,
      transform: 'scale(1.02)',
    },
    '& input': {
      minHeight: '44px',
    }
  },

  tableWrapper: {
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.7)',
    background: theme.fn.linearGradient(
      45,
      theme.colors.dark[8],
      theme.colors.dark[9]
    ),
    border: `1px solid ${theme.fn.rgba(theme.colors.yellow[5], 0.2)}`,
    animation: 'slideUp 0.6s ease-out',
    position: 'relative',
  },
  
  table: {
    backgroundColor: theme.fn.rgba(theme.colors.dark[7], 0.9),
    border: `1px solid ${theme.fn.rgba(theme.colors.yellow[5], 0.2)}`,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    boxShadow: theme.shadows.xl,

    '& thead tr th': {
      backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.95),
      transition: 'background-color 0.2s ease',
    },

    '& tbody tr': {
      transition: 'transform 0.2s ease, background-color 0.2s ease',
    },
  },

  pagination: {
    margin: `0.5rem 0`,
    '& button': {
      transition: 'all 0.2s ease',
      '&[data-active]': {
        backgroundImage: `linear-gradient(45deg, ${theme.colors.yellow[5]}, ${theme.colors.orange[5]})`,
      },
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },

  row: {
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: `${theme.fn.rgba(theme.colors.yellow[5], 0.05)} !important`,
      transform: 'translateX(4px)',
    },

    '& td': {
      padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
      borderBottom: `1px solid ${theme.fn.rgba(theme.colors.gray[7], 0.2)}`,
    },
  },

  cellText: {
    color: theme.colors.gray[2],
    fontSize: theme.fontSizes.sm,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 200,
  },

  cell: {
    padding: theme.spacing.xs,
  },
  
  headerCell: {
    padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    backgroundColor: theme.fn.rgba(theme.colors.dark[8], 0.9),
    borderBottom: `2px solid ${theme.colors.yellow[5]}`,
    
    '&:hover': {
      backgroundColor: theme.fn.rgba(theme.colors.yellow[5], 0.1),
    },

    '&[data-sorted]': {
      backgroundColor: theme.fn.rgba(theme.colors.yellow[5], 0.15),
    },
  },

  headerText: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 700,
    color: theme.colors.yellow[5],
    fontSize: theme.fontSizes.sm,
  },

  chevron: {
    marginLeft: theme.spacing.xs,
    color: theme.fn.rgba(theme.colors.gray[5], 0.5),
    transition: 'color 0.2s ease',
    
    '&:hover': {
      color: theme.colors.yellow[5],
    },
  },

  resourceSelector: {
    marginBottom: '0.5rem',
    '& [data-active]': {
      backgroundImage: `linear-gradient(45deg, ${theme.colors.yellow[5]}, ${theme.colors.orange[5]})`,
    },
  },
  
  '@global': {
    '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
    '@keyframes slideUp': { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
    '@keyframes rowEnter': { from: { opacity: 0, transform: 'translateX(10px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
  },
}));
