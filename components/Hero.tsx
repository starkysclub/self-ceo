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
          <Col xs={12} md={5} mdOffset={1}>
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
  margin-bottom: -10rem;
  overflow: hidden;

  .image {
    width: 100%;
    height: 90vw;
    background: url('/images/FreeiPhoneXr1.png');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    right: 10vw;

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      width: 800px;
      height: 824px;
      position: absolute;
      top: -180px;
      right: 0;
    }
  }
  .circle-1 {
    position: absolute;
    width: 617px;
    height: 617px;
    left: -105px;
    top: -150px;

    /* Purple */

    border: 150px solid #62319e;
    opacity: 0.05;
    border-radius: 50%;
  }

  .circle-2 {
    position: absolute;
    width: 732px;
    height: 732px;
    top: -150px;

    /* Yellow */

    border: 150px solid #ffb24d;
    opacity: 0.05;
    border-radius: 50%;
    right: -200px;
  }

  .circle-3 {
    position: absolute;
    width: 224px;
    height: 224px;
    left: 203px;
    bottom: 0;

    /* Blue */

    border-radius: 50%;
    border: 50px solid #4dbfff;
    opacity: 0.08;
  }
`;

export default withTranslation('common')(Hero);
