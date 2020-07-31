import * as styledComponents from 'styled-components';
import { rem } from 'polished';
import { FC } from 'react';

const {
  default: styled,
  createGlobalStyle,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface WithClassName {
  className?: string;
}

export type SC<P = any> = FC<P & WithClassName>;

export interface IThemeInterface {
  colors: {
    white: string;
    black: string;
    default: string;
    defaultHover: string;
    primary: string;
    primaryHover: string;
    primaryDisabled: string;
    secondary: string;
    secondaryHover: string;
    secondaryDisabled: string;
    success: string;
    danger: string;
    warning: string;
    info: string;

    black1: string;
    black2: string;
    black3: string;
    black4: string;
    black5: string;

    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
  };
  fonts: {
    fontBase: string;
    fontHeadings: string;
  };
  fontWeights: {
    textLight: number;
    textRegular: number;
    textMedium: number;
    textBold: number;
  };
  fontSizes: {
    textBase: string;
    textSmall: string;
    textSubMedium: string;
    textMedium: string;
    textSupMedium: string;
    textBig: string;

    h1: string;
    h1small: string;
    h2: string;
    h2small: string;
    h3: string;
    h3small: string;
    h4: string;
    h5: string;
    h6: string;
  };
  lineHeights: {
    textBase: string;
    textSmall: string;
    textSubMedium: string;
    textMedium: string;
    textSupMedium: string;
    textSupBig: string;
    textBig: string;
    h1: string;
    h1small: string;
    h2: string;
    h2small: string;
    h3: string;
    h3small: string;
    h4: string;
    h5: string;
  };
  letterSpacing: string;
  flexboxgrid: {
    gridSize: number;
    gutterWidth: number;
    outerMargin: number;
    mediaQuery: string;
    container: {
      sm: number; // rem
      md: number; // rem
      lg: number; // rem
    };
    breakpoints: {
      xs: number; // em
      sm: number; // em
      md: number; // em
      lg: number; // em
    };
  };
}

export const theme: IThemeInterface = {
  colors: {
    white: '#FFF',
    black: '#000',
    default: '#3C3841',
    defaultHover: '#1D1717',
    primary: '#62319E',
    primaryHover: '#2F80ED',
    primaryDisabled: '#2F80ED',
    secondary: '#C7C7C7',
    secondaryHover: '#C7C7C7',
    secondaryDisabled: '#C7C7C7',
    success: '#32D172',
    danger: '#FF7474',
    warning: '#F2994A',
    info: '#5BA1FF',

    black1: '#1D1717',
    black2: '#3b3938',
    black3: '#1A1B1B',
    black4: '#303131',
    black5: '#14032',

    grey1: '#3C3947',
    grey2: '#666666',
    grey3: '#7A7580',
    grey4: '#CDCDCD',
  },
  fonts: {
    fontBase: 'Jost',
    fontHeadings: 'CormorantGaramond',
  },
  fontWeights: {
    textLight: 300,
    textRegular: 400,
    textMedium: 500,
    textBold: 700,
  },
  fontSizes: {
    textBase: '22px',
    textSmall: '11px',
    textSubMedium: '15px',
    textMedium: '18px',
    textSupMedium: '18px',
    textBig: '22px',
    h1small: '36px',
    h1: '86px',
    h2small: '32px',
    h2: '64px',
    h3: '36px',
    h3small: '24px',
    h4: '26px',
    h5: '20px',
    h6: '12px',
  },
  lineHeights: {
    textBase: '33px',
    textSmall: '11px',
    textSubMedium: '15px',
    textSupMedium: '18px',
    textMedium: '28px',
    textBig: '22px',
    textSupBig: '24px',
    h1: '104px',
    h1small: '44px',
    h2: '78px',
    h2small: '39px',
    h3: '28px',
    h3small: '29px',
    h4: '31px',
    h5: '22px',
  },
  letterSpacing: '0.01em',
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

export default styled;
export { css, createGlobalStyle, ThemeProvider };
