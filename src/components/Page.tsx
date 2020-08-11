import styled, { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../app/i18n';

interface PageTemplateProps extends WithTranslation {}

const PageTemplate: SC<PageTemplateProps> = ({ className, children }) => {
  return (
    <main className={className}>
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="circle-3" />
      {children}
    </main>
  );
};

const Page = styled(PageTemplate)`
  overflow: hidden;
  position: relative;

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
    min-height: 1000px;
  }

  .circle-1 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: -50px;
    top: 0px;
    /* Purple */
    border: 50px solid #62319e;
    opacity: 0.05;
    border-radius: 50%;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 617px;
      height: 617px;
      left: -170px;
      top: 30px;
      border-width: 150px;
    }
  }

  .circle-2 {
    position: absolute;
    width: 250px;
    height: 250px;
    top: 150px;
    right: -100px;
    /* Yellow */
    border: 50px solid #ffb24d;
    opacity: 0.05;
    border-radius: 50%;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 732px;
      height: 732px;
      top: 20px;
      right: -200px;
      border-width: 150px;
    }
  }

  .circle-3 {
    position: absolute;
    width: 70px;
    height: 70px;
    left: 10px;
    top: 300px;

    /* Blue */

    border-radius: 50%;
    border: 20px solid #4dbfff;
    opacity: 0.08;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 224px;
      height: 224px;
      left: 280px;
      top: 730px;
      border-width: 50px;
    }
  }
`;

export default withTranslation('common')(Page);
