import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface FooterTemplateProps extends WithTranslation {}

const FooterTemplate: SC<FooterTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col>
            <h2>{t('footer.title')}</h2>
            <p>{t('footer.description')}</p>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Footer = styled(FooterTemplate)``;

export default withTranslation('common')(Footer);
