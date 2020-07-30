import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface NavigationTemplateProps extends WithTranslation {}

const NavigationTemplate: SC<NavigationTemplateProps> = ({ className, t }) => {
  return (
    <div className={className}>
      <Grid>
        <Row>
          <Col md={6}>
            <div>
              <h1>{t('navigation.brand')}</h1>
            </div>
          </Col>
          <Col md={6}>
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
        </Row>
      </Grid>
    </div>
  );
};

const Navigation = styled(NavigationTemplate)``;

export default withTranslation('common')(Navigation);
