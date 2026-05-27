import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {useEffect} from 'react'
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
useEffect(() => {
  if (typeof window === 'undefined') return;
  const handleError = (e: ErrorEvent) => {
    window.parent?.postMessage({
      type: 'preview:runtime-error',
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: e.error?.stack ?? '',
      source: 'error',
    }, '*');
  };
  const handleRejection = (e: PromiseRejectionEvent) => {
    window.parent?.postMessage({
      type: 'preview:runtime-error',
      message: e.reason instanceof Error ? e.reason.message : String(e.reason),
      filename: '',
      lineno: 0,
      colno: 0,
      stack: e.reason instanceof Error ? (e.reason.stack ?? '') : '',
      source: 'unhandledrejection',
    }, '*');
  };
  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleRejection);
  return () => {
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleRejection);
  };
}, []);

  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
  );
}
