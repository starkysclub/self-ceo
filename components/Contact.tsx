import styled from 'styled-components';
import Section from './Section';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { SC } from '../styles/theme';
import { withTranslation, WithTranslation } from '../i18n';

interface ContactTemplateProps extends WithTranslation {}

const ContactTemplate: SC<ContactTemplateProps> = ({ className, t }) => {
  return (
    <Section className={className}>
      <Grid>
        <Row>
          <Col>
            <h2>{t('contact.title')}</h2>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

const Contact = styled(ContactTemplate)``;

export default withTranslation('common')(Contact);
