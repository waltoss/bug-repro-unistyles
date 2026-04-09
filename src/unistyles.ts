import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#007AFF',
    background: '#F2F2F7',
    surface: '#FFFFFF',
    surfaceSecondary: '#E5E5EA',
    text: '#000000',
    textSecondary: '#6B7280',
    accent: '#34C759',
    border: '#D1D1D6',
  },
  sizes: {
    'size-025': 2,
    'size-050': 4,
    'size-100': 8,
    'size-200': 16,
    'size-300': 24,
    'size-400': 32,
  },
};

const darkTheme = {
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    surface: '#1C1C1E',
    surfaceSecondary: '#2C2C2E',
    text: '#FFFFFF',
    textSecondary: '#98989D',
    accent: '#30D158',
    border: '#38383A',
  },
  sizes: {
    'size-025': 2,
    'size-050': 4,
    'size-100': 8,
    'size-200': 16,
    'size-300': 24,
    'size-400': 32,
  },
};

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  settings: {
    initialTheme: 'light',
  },
});
