import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface FeaturesTemplateProps extends WithTranslation {}

const FeaturesTemplate: SC<FeaturesTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row className="heading">
          <Col xs={12}>
            <h2>{t('features.title')}</h2>
            <p>{t('features.description')}</p>
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <h3>{t('features.todos.title')}</h3>
            <p>{t('features.todos.description')}</p>
          </Col>
          <Col xs={12} md={6}>
            <div className="feature-image todos" />
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <div className="feature-image goals" />
          </Col>
          <Col xs={12} md={6}>
            <h3>{t('features.goals.title')}</h3>
            <p>{t('features.goals.description')}</p>
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <h3>{t('features.events.title')}</h3>
            <p>{t('features.events.description')}</p>
          </Col>
          <Col xs={12} md={6}>
            <div className="feature-image events" />
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <div className="feature-image habits" />
          </Col>
          <Col xs={12} md={6}>
            <h3>{t('features.habbits.title')}</h3>
            <p>{t('features.habbits.description')}</p>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Features = styled(FeaturesTemplate)`
  .heading {
    text-align: center;
  }
  .feature {
    padding: 6rem 0;
    position: relative;
    min-height: 460px;

    &-image {
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .todos {
    background: url('/images/TODOs.png');
    width: 500px;
    height: 420px;
    position: absolute;
    top: 20px;
    right: 0;
  }
  .goals {
    background: url('/images/goals.png');
    width: 520px;
    height: 470px;
    position: absolute;
    top: 20px;
    left: 0;
  }
  .events {
    background: url('/images/events.png');
    width: 500px;
    height: 420px;
    position: absolute;
    top: 20px;
    right: 0;
  }
  .habits {
    background: url('/images/habits.png');
    width: 520px;
    height: 470px;
    position: absolute;
    top: 20px;
    left: 0;
  }
`;

export default withTranslation('common')(Features);
