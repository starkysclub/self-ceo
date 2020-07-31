import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface HeroTemplateProps extends WithTranslation {}

const HeroTemplate: SC<HeroTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid style={{ position: 'relative', minHeight: '800px' }}>
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="circle-3" />
        <Row>
          <Col xs={12} sm={8} smOffset={2} md={5} mdOffset={1}>
            <div className="content">
              <h2>{t('hero.title')}</h2>
              <p>{t('hero.description')}</p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="image"></div>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Hero = styled(HeroTemplate)`
  margin-bottom: -15rem;
  overflow: hidden;
  padding-top: 2rem !important;

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
    margin-bottom: -6rem;
  }

  @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
    margin-bottom: -20rem;
  }

  .content {
    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .image {
    width: 100%;
    height: 90vw;
    background: url('/images/FreeiPhoneXr1.png');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 10vw;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      position: absolute;
      width: 800px;
      height: 824px;
      top: -40px;
      right: 0;
    }
  }
  .circle-1 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: -50px;
    top: -30px;
    /* Purple */
    border: 50px solid #62319e;
    opacity: 0.05;
    border-radius: 50%;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 617px;
      height: 617px;
      left: -170px;
      top: -30px;
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
    left: 50px;
    bottom: 180px;

    /* Blue */

    border-radius: 50%;
    border: 20px solid #4dbfff;
    opacity: 0.08;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 224px;
      height: 224px;
      left: 130px;
      bottom: -40px;
      border-width: 50px;
    }
  }
`;

export default withTranslation('common')(Hero);
