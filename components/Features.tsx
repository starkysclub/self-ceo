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
            <div className="feature-right feature-image todos" />
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <div className="feature-left feature-image goals" />
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
            <div className="feature-right feature-image events" />
          </Col>
        </Row>
        <Row className="feature">
          <Col xs={12} md={6}>
            <div className="feature-left feature-image habits" />
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
    padding: 4rem 0;
    position: relative;
    display: flex;

    &:nth-of-type(odd) {
      flex-direction: column-reverse;
    }

    @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
      flex-direction: row;
      min-height: 460px;
      padding: 6rem 0;
    }

    &-image {
      background-repeat: no-repeat;
      background-size: contain;
      width: 500px;
      height: 420px;

      @media (min-width: ${({ theme }) => theme.flexboxgrid.breakpoints.md}rem) {
        position: absolute;
        top: 20px;
      }
    }

    &-right {
      right: 0;
    }

    &-left {
      left: 0;
    }
  }
  .todos {
    background-image: url('/images/TODOs.png');
  }
  .goals {
    background-image: url('/images/goals.png');
  }
  .events {
    background-image: url('/images/events.png');
  }
  .habits {
    background-image: url('/images/habits.png');
  }
`;

export default withTranslation('common')(Features);
