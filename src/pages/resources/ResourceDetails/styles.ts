import { createStyles } from '@mantine/core';

export const useResourceDetailStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    padding: '2rem 0',
    backgroundColor: '#0a0c1f',
  },
  card: {
    backgroundColor: theme.fn.rgba(theme.colors.dark[6], 0.9),
    border: `1px solid ${theme.fn.rgba(theme.colors.yellow[5], 0.2)}`,
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  title: {
    color: theme.colors.yellow[5],
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  accordionControl: {
    color: theme.colors.yellow[5],
    fontWeight: 700,
  },
  accordionIcon: {
    marginRight: theme.spacing.sm,
  },
  enrichmentCard: {
    backgroundColor: theme.fn.rgba(theme.colors.dark[5], 0.8),
    border: `1px solid ${theme.fn.rgba(theme.colors.yellow[5], 0.1)}`,
  },
  attribute: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.fn.rgba(theme.colors.dark[5], 0.3),
  },
  detailLabel: {
    color: theme.colors.gray[4],
    fontWeight: 600,
    fontSize: theme.fontSizes.sm,
    marginBottom: 4,
  },
  detailValue: {
    color: theme.white,
    fontSize: theme.fontSizes.md,
    lineHeight: 1.3,
  },
}));
