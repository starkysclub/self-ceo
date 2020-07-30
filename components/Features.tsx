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
        <Row>
          <Col xs={12}>
            <h2>{t('features.title')}</h2>
            <p>{t('features.description')}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h3>{t('features.todos.title')}</h3>
            <p>{t('features.todos.description')}</p>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}>
            <h3>{t('features.goals.title')}</h3>
            <p>{t('features.goals.description')}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h3>{t('features.events.title')}</h3>
            <p>{t('features.events.description')}</p>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}>
            <h3>{t('features.habbits.title')}</h3>
            <p>{t('features.habbits.description')}</p>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Features = styled(FeaturesTemplate)``;

export default withTranslation('common')(Features);
