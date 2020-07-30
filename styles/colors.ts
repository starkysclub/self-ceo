import { css } from './theme';
import { theme } from './theme';

const colors = css`
  .primary {
    color: ${theme.colors.primary};
  }
  .secondary {
    color: ${theme.colors.secondary};
  }
  .success {
    color: ${theme.colors.success};
  }
  .danger {
    color: ${theme.colors.danger};
  }
  .warning {
    color: ${theme.colors.warning};
  }
  .info {
    color: ${theme.colors.info};
  }

  .bg-primary {
    background-color: ${theme.colors.primary};
  }
  .bg-secondary {
    background-color: ${theme.colors.secondary};
  }
  .bg-success {
    background-color: ${theme.colors.success};
  }
  .bg-danger {
    background-color: ${theme.colors.danger};
  }
  .bg-warning {
    background-color: ${theme.colors.warning};
  }
  .bg-info {
    background-color: ${theme.colors.info};
  }
  .bg-white {
    background-color: ${theme.colors.white};
  }
`;

export default colors;
