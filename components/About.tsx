import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface AboutTemplateProps extends WithTranslation {}

const AboutTemplate: SC<AboutTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col>
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>{t('about.todos.title')}</h3>
            <p>{t('about.todos.description')}</p>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <h3>{t('about.goals.title')}</h3>
            <p>{t('about.goals.description')}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>{t('about.events.title')}</h3>
            <p>{t('about.events.description')}</p>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <h3>{t('about.habbits.title')}</h3>
            <p>{t('about.habbits.description')}</p>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const About = styled(AboutTemplate)``;

export default withTranslation('common')(About);
