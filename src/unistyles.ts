import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#000000',
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
    background: '#1C1C1E',
    text: '#FFFFFF',
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
