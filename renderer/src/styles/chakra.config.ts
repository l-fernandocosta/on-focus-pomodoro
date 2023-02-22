import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        fontFamily: 'Poppins',
        maxWidth: '1440px',

        backgroundColor:
          props.colorMode === 'dark' ? 'black.700' : 'whiteAlpha.800',
        lineHeight: 'tall',
      },
    }),
  },
});
