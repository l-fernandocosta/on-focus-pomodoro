import { theme } from '@/styles/chakra.config';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
