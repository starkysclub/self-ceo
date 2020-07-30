import styled from '../styles/theme';

interface SectionProps {
  className?: string;
  colored?: boolean;
}

const Section = styled.section<SectionProps>`
  padding: 10rem 0;
  background: ${({ theme, colored }) => (colored ? 'rgba(98, 49, 158, 0.05)' : theme.colors.white)};
`;

export default Section;
