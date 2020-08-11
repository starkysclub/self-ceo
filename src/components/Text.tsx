import styled, { theme } from '../styles/theme';
import { rem } from 'polished';

const Text = styled.div`
  h1,
  .as-h1,
  h2,
  .as-h2,
  h3,
  .as-h3,
  h4,
  .as-h4,
  h5,
  .as-h5,
  h6,
  .as-h6 {
    font-family: ${({ theme }) => theme.fonts.fontBase} !important;
  }

  h1 {
    font-size: ${rem('60px')};
    line-height: ${rem('70px')};
  }

  h2,
  .as-h2,
  h3,
  .as-h3 {
    margin-top: 2.5rem;
  }

  h4,
  .as-h4,
  h5,
  .as-h5,
  h6,
  .as-h6 {
    margin-top: 1.5rem;
  }
`;

export default Text;
