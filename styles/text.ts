import { css, theme } from './theme';

const text = css`
  h1,
  .as-h1 {
    font-size: ${theme.fontSizes.h1};
    line-height: ${theme.lineHeights.h1};
    font-family: ${theme.fonts.fontHeadings};
    letter-spacing: ${theme.letterSpacing};
  }
  h2,
  .as-h2 {
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
    font-family: ${theme.fonts.fontHeadings};
  }
  h3,
  .as-h3 {
    font-size: ${theme.fontSizes.h3};
    line-height: ${theme.lineHeights.h3};
    font-family: ${theme.fonts.fontHeadings};
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
    font-size: ${theme.fontSizes.textBase};
    line-height: ${theme.lineHeights.textBase};
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
