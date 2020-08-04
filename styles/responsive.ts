import { css } from './theme';
import { theme } from './theme';

const responsive = css`
  .hide {
    display: none;
  }

  .visible-md {
    @media (min-width: ${theme.flexboxgrid.breakpoints.md}rem) {
      display: flex;
    }
  }
  .hide-md {
    @media (min-width: ${theme.flexboxgrid.breakpoints.md}rem) {
      display: none;
    }
  }
`;

export default responsive;
