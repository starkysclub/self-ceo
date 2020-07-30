import { css, theme } from './theme';

const fonts = css`
  @font-face {
    src: url('/fonts/jost/Jost-Light.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textLight};
    font-style: normal;
  }
  @font-face {
    src: url('/fonts/jost/Jost-LightItalic.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textLight};
    font-style: italic;
  }
  @font-face {
    src: url('/fonts/jost/Jost-Regular.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textRegular};
    font-style: normal;
  }
  @font-face {
    src: url('/fonts/jost/Jost-Medium.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textMedium};
    font-style: normal;
  }
  @font-face {
    src: url('/fonts/jost/Jost-MediumItalic.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textMedium};
    font-style: italic;
  }
  @font-face {
    src: url('/fonts/jost/Jost-Bold.ttf') format('truetype');
    font-family: ${theme.fonts.fontBase};
    font-weight: ${theme.fontWeights.textBold};
    font-style: normal;
  }
`;

export default fonts;
