import { css } from './theme';
import { theme } from './theme';

const responsive = css`
  .hide {
    display: none !important;
  }

  .visible-md {
    @media (min-width: ${theme.flexboxgrid.breakpoints.md}rem) {
      display: flex !important;
    }
  }
  .hide-md {
    @media (min-width: ${theme.flexboxgrid.breakpoints.md}rem) {
      display: none !important;
    }
  }
`;

export default responsive;
