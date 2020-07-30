import { css } from './theme';
import fonts from './fonts';
import colors from './colors';
import text from './text';
import normalize from './normalize';

const main = css`
  ${normalize}
  ${fonts}
  ${colors}
  ${text}


  * {
        outline: none;
        box-sizing: border-box;
    }

    *::after, *::before{
        box-sizing: border-box;
    }

    html {
        font-family: ${({ theme }) => theme.fonts.fontBase};
    }
`;

export default main;
