import { createTheme, createThemeContract } from '@vanilla-extract/css'

export const tokens = createThemeContract({
  color: {
    background: null,
    surface: null,
    text: null,
    muted: null,
    border: null,
    primary: null,
    primaryHover: null,
    secondary: null,
    secondaryHover: null,
    danger: null,
    dangerHover: null,
    success: null,
    successBackground: null,
    warning: null,
    warningBackground: null,
    error: null,
    errorBackground: null,
  },
  space: {
    small: null,
    medium: null,
    large: null,
  },
  radius: {
    control: null,
    card: null,
    pill: null,
  },
  font: {
    body: null,
    small: null,
    medium: null,
    heading: null,
  },
})

export const themeClass = createTheme(tokens, {
  color: {
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#cbd5e1',
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#e2e8f0',
    secondaryHover: '#cbd5e1',
    danger: '#dc2626',
    dangerHover: '#b91c1c',
    success: '#166534',
    successBackground: '#dcfce7',
    warning: '#92400e',
    warningBackground: '#fef3c7',
    error: '#991b1b',
    errorBackground: '#fee2e2',
  },
  space: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
  radius: {
    control: '0.375rem',
    card: '0.75rem',
    pill: '999px',
  },
  font: {
    body: 'system-ui, sans-serif',
    small: '0.875rem',
    medium: '1rem',
    heading: '1.125rem',
  },
})
