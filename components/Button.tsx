import styled, { css } from '../styles/theme';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const styles = css`
  display: inline;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  padding: 0.8rem 2.5rem 0.74rem;
  margin: 0 1rem 1rem 0;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.5px;

  background: #62319e;
  border: 1px solid #62319e;
  border-radius: 9px;
  color: #fff !important;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: #fff;
    }
  }

  &:hover {
    color: #62319e !important;
    background: transparent;

    svg {
      path {
        fill: #62319e;
      }
    }
  }

  ${({ secondary }: any) =>
    secondary &&
    css`
      background: transparent;
      border: 1px solid #3c3841;
      color: #3c3841 !important;

      svg {
        path {
          fill: #3c3841;
        }
      }

      &:hover {
        color: #fff !important;
        background: #3c3841;
        border-color: #3c3841;

        svg {
          path {
            fill: #fff;
          }
        }
      }
    `}
`;

export const Button = styled.button<ButtonProps>`
  ${styles}
`;

export const LinkButton = styled.a<ButtonProps>`
  ${styles}
`;
