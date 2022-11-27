import {createTheme} from '@mui/material';
import {green} from '@mui/material/colors';

const customTheme = () => createTheme({
  palette: {
    primary: green,
    background: {
      primaryDark: '#1F1F1F'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontWeight: 400
    }
  }
});

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    // common?: Partial<CustomTypeCommon>;
    // text?: Partial<CustomTypeText>;
  }
  interface TypeBackground {
    primaryDark: string
  }
}

export default customTheme;