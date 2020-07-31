import { css, theme } from './theme';

const text = css`
  h1,
  .as-h1 {
    font-size: ${theme.fontSizes.h1small};
    line-height: ${theme.lineHeights.h1small};
    font-family: ${theme.fonts.fontHeadings};

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      font-size: ${theme.fontSizes.h2};
      line-height: ${theme.lineHeights.h2};
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}rem) {
      font-size: ${theme.fontSizes.h1};
      line-height: ${theme.lineHeights.h1};
      letter-spacing: ${theme.letterSpacing};
    }
  }
  h2,
  .as-h2 {
    font-size: ${theme.fontSizes.h2small};
    line-height: ${theme.lineHeights.h2small};
    font-family: ${theme.fonts.fontHeadings};
    letter-spacing: 0.01em;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      font-size: ${theme.fontSizes.h2};
      line-height: ${theme.lineHeights.h2};
    }
  }
  h3,
  .as-h3 {
    font-size: ${theme.fontSizes.h3small};
    line-height: ${theme.lineHeights.h3small};
    font-family: ${theme.fonts.fontHeadings};

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      font-size: ${theme.fontSizes.h3};
      line-height: ${theme.lineHeights.h3};
    }
  }
  h4,
  .as-h4 {
    font-size: ${theme.fontSizes.h4};
    line-height: ${theme.lineHeights.h4};
    font-family: ${theme.fonts.fontHeadings};
  }
  h5,
  .as-h5 {
    font-size: ${theme.fontSizes.h5};
    line-height: ${theme.lineHeights.h5};
    font-weight: ${theme.fontWeights.textBold};
    font-family: ${theme.fonts.fontHeadings};
  }
  p {
    font-size: 14px;
    line-height: 22px;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
      font-size: ${theme.fontSizes.textBase};
      line-height: ${theme.lineHeights.textBase};
    }
  }
  b,
  strong {
    font-weight: ${theme.fontWeights.textBold};
  }

  .text-regular {
    font-weight: ${theme.fontWeights.textRegular};
  }
  .text-bold {
    font-weight: ${theme.fontWeights.textBold};
  }

  .text-small {
    font-size: ${theme.fontSizes.textSmall};
    line-height: ${theme.lineHeights.textSmall};
  }
  .text-medium {
    font-size: ${theme.fontSizes.textMedium};
    line-height: ${theme.lineHeights.textMedium};
  }
  .text-big {
    font-size: ${theme.fontSizes.textBig};
    line-height: ${theme.lineHeights.textBig};
  }
  .text-italic {
    font-style: italic;
  }
`;

export default text;
