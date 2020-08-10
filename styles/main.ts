import { css } from './theme';
import fonts from './fonts';
import colors from './colors';
import text from './text';
import normalize from './normalize';
import responsive from './responsive';

const main = css`
  ${normalize}
  ${fonts}
  ${colors}
  ${text}
  ${responsive}


  * {
        outline: none;
        box-sizing: border-box;
    }

    *::after, *::before{
        box-sizing: border-box;
    }

    html {
        font-family: ${({ theme }) => theme.fonts.fontBase};
        font-size: 12px;
        color: ${({ theme }) => theme.colors.default};

        @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
            font-size: 14px;
        }

        @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
            text-align: left;
            font-size: 16px;
        }
    }
`;

export default main;
