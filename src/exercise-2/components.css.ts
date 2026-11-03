import { style, styleVariants } from '@vanilla-extract/css'
import { tokens } from './theme.css'

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  borderRadius: tokens.radius.control,
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 150ms ease, border-color 150ms ease',
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${tokens.color.primary}`,
      outlineOffset: '2px',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
})

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: tokens.color.primary,
    color: tokens.color.surface,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.color.primaryHover,
      },
    },
  },
  secondary: {
    backgroundColor: tokens.color.secondary,
    color: tokens.color.text,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.color.secondaryHover,
      },
    },
  },
  danger: {
    backgroundColor: tokens.color.danger,
    color: tokens.color.surface,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: tokens.color.dangerHover,
      },
    },
  },
})

export const buttonSizes = styleVariants({
  small: {
    padding: `${tokens.space.small} ${tokens.space.medium}`,
    fontSize: tokens.font.small,
  },
  large: {
    padding: `${tokens.space.medium} ${tokens.space.large}`,
    fontSize: tokens.font.medium,
  },
})

export const card = style({
  padding: tokens.space.large,
  border: `1px solid ${tokens.color.border}`,
  borderRadius: tokens.radius.card,
  backgroundColor: tokens.color.surface,
  boxShadow: '0 4px 12px rgb(15 23 42 / 8%)',
})

export const cardTitle = style({
  margin: `0 0 ${tokens.space.medium}`,
  fontSize: tokens.font.heading,
})

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${tokens.space.small} ${tokens.space.medium}`,
  borderRadius: tokens.radius.pill,
  fontSize: tokens.font.small,
  fontWeight: 600,
})

export const badgeVariants = styleVariants({
  success: {
    backgroundColor: tokens.color.successBackground,
    color: tokens.color.success,
  },
  warning: {
    backgroundColor: tokens.color.warningBackground,
    color: tokens.color.warning,
  },
  error: {
    backgroundColor: tokens.color.errorBackground,
    color: tokens.color.error,
  },
})

export const app = style({
  minHeight: '100vh',
  padding: tokens.space.large,
  backgroundColor: tokens.color.background,
  color: tokens.color.text,
  fontFamily: tokens.font.body,
})

export const content = style({
  width: 'min(100%, 56rem)',
  margin: '0 auto',
})

export const exerciseLink = style({
  color: tokens.color.primary,
})

export const section = style({
  marginTop: tokens.space.large,
})

export const buttonGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
  gap: tokens.space.medium,
})

export const buttonGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: tokens.space.small,
})

export const badgeGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.space.small,
})
