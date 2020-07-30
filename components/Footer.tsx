import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface FooterTemplateProps extends WithTranslation {}

const FooterTemplate: SC<FooterTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className} colored>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <h2>{t('footer.title')}</h2>
            <p>{t('footer.description')}</p>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={4}>
                <h4>{t('footer.importantLinks')}</h4>
                <ul>
                  <li>
                    <a>{t('footer.terms')}</a>
                  </li>
                  <li>
                    <a>{t('footer.privace')}</a>
                  </li>
                  <li>
                    <a>{t('footer.company')}</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <h4>{t('footer.menu')}</h4>
                <ul>
                  <li>
                    <a href="#home">{t('navigation.home')}</a>
                  </li>
                  <li>
                    <a href="#features">{t('navigation.features')}</a>
                  </li>
                  <li>
                    <a href="#contact">{t('navigation.contact')}</a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <h4>{t('footer.download')}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Footer = styled(FooterTemplate)``;

export default withTranslation('common')(Footer);
