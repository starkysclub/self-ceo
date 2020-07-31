import styled from '../styles/theme';

interface SectionProps {
  className?: string;
  colored?: boolean;
}

const Section = styled.section<SectionProps>`
  padding: 4rem 0;
  background: ${({ theme, colored }) => (colored ? 'rgba(98, 49, 158, 0.05)' : 'transparent')};
  position: relative;

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
    padding: 10rem 0;
  }
`;

export default Section;
