import styled, { css } from '../styles/theme';
import { rem } from 'polished';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  padding: 1.1rem 1rem 0.9rem;
  margin: 0 1rem 1rem 0;
  width: 100%;
  max-width: 260px;
  position: relative;
  font-size: ${rem('20px')};

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
    width: auto;
    display: inline-flex;
    padding: 0.8rem 1rem 0.74rem;
    font-size: ${rem('18px')};
  }

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.lg}rem) {
    padding: 0.8rem 2.5rem 0.74rem;
  }

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
    position: relative;
    top: -2px;
    margin-left: 5px;

    path {
      fill: #fff;
    }
  }

  &:hover {
    color: #62319e !important;
    background: transparent;
    text-decoration: none;

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
